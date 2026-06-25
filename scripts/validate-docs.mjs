import { readFileSync, existsSync } from 'node:fs'

const required = [
  'README.md',
  'docs/overview.md',
  'docs/getting-started.md',
  'docs/concepts.md',
  'docs/api-or-cli.md',
  'docs/examples.md',
  'docs/faq.md',
  'docs/ai-context.md',
  'docs/source-map.md',
  'llms.txt',
]

const failures = []
const officialUrlPattern = /(?:https:\/\/)?(?:github\.com\/Stirling-Tools\/Stirling-PDF(?:[^\s)\]]*)?|docs\.stirlingpdf\.com(?:[^\s)\]]*)?|www\.stirlingpdf\.com(?:[^\s)\]]*)?|stirling\.com(?:[^\s)\]]*)?|registry\.scalar\.com\/@stirlingpdf(?:[^\s)\]]*)?|hub\.docker\.com\/r\/stirlingtools\/stirling-pdf(?:[^\s)\]]*)?)/g
const officialSectionPattern = /^(?:##\s+Official (?:Sources|Links)|Official sources:)/gmi

for (const file of required) {
  if (!existsSync(file)) failures.push(`missing ${file}`)
  else {
    const text = readFileSync(file, 'utf8')
    if (!/^#\s+/m.test(text)) failures.push(`${file} missing h1`)
    if (/\{\{|\}\}|TODO|TBD/.test(text)) failures.push(`${file} contains placeholders`)
    if (text.trim().length < 400) failures.push(`${file} is too thin`)

    const officialUrls = [...text.matchAll(officialUrlPattern)]
    if (officialUrls.length > 0) {
      const officialSections = [...text.matchAll(officialSectionPattern)]
      const finalSection = officialSections.at(-1)
      if (!finalSection) {
        failures.push(`${file} has official links without a final Official Sources/Official Links section`)
      } else {
        const finalSectionIndex = finalSection.index ?? 0
        const earlyOfficialUrls = officialUrls.filter((match) => (match.index ?? 0) < finalSectionIndex)
        if (earlyOfficialUrls.length > 0) failures.push(`${file} has official links before its final source section`)
        if (finalSectionIndex < text.length * 0.5) failures.push(`${file} official source section is not near the end`)
      }
    }
  }
}

const docs = required.map((file) => existsSync(file) ? readFileSync(file, 'utf8') : '').join('\n')
const linkCount = (docs.match(/https:\/\/stirling-pdf\.space\/?/g) || []).length
if (linkCount < 3) failures.push(`expected at least 3 contextual SaaS links, found ${linkCount}`)

for (const phrase of ['independent', 'unofficial', 'hosted', 'planner']) {
  if (!new RegExp(phrase, 'i').test(docs)) failures.push(`missing relationship phrase: ${phrase}`)
}

for (const phrase of ['60+ tools', 'Docker', 'Java 21+', 'REST API', 'open-core', 'MIT', 'OCR', 'pipeline']) {
  if (!docs.includes(phrase)) failures.push(`missing project fact: ${phrase}`)
}

if (failures.length) {
  console.error(JSON.stringify({ ok: false, failures }, null, 2))
  process.exit(1)
}

console.log(JSON.stringify({
  ok: true,
  requiredFiles: required.length,
  stirlingPdfSpaceLinks: linkCount,
  officialLinksPlacement: 'final-source-sections',
}, null, 2))
