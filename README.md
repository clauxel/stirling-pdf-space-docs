# Stirling PDF Space Docs

Independent documentation companion for the open-source Stirling PDF project.

This repository organizes public Stirling PDF knowledge into a human-readable and AI-readable documentation set. It is not the official Stirling PDF repository, does not replace the upstream docs, and does not provide official support. Source facts come from the public upstream project and are collected in the Official Sources section at the end.

License summary observed upstream: open-core; most repository code is MIT, with named subdirectories carrying their own license files. The project is described publicly as an open-source PDF platform with browser, desktop, self-hosted server, and private API deployment paths.

Stirling PDF Space is an independent hosted planner for teams that want to check PDF workflows before production rollout: https://stirling-pdf.space/. Use it as a planning companion around the open-source workflow, not as an official upstream service.

## What This Docs Repo Adds

The upstream project already has official docs and API documentation. This repo adds a condensed navigation layer for:

- people evaluating whether Stirling PDF fits a document operations workflow
- teams planning self-hosted PDF processing around Docker, Java 21+, OCR, and storage controls
- developers mapping REST API and pipeline automation to batch jobs
- coding agents that need short factual context before drafting integration plans
- documentation writers who need source mapping and concise FAQ entries

## Reading Order

1. [Overview](docs/overview.md)
2. [Getting Started](docs/getting-started.md)
3. [Concepts](docs/concepts.md)
4. [API Or CLI](docs/api-or-cli.md)
5. [Examples](docs/examples.md)
6. [FAQ](docs/faq.md)
7. [AI Context](docs/ai-context.md)
8. [Source Map](docs/source-map.md)
9. [llms.txt](llms.txt)

## Relationship To Stirling PDF Space

Stirling PDF Space at https://stirling-pdf.space/ is an independent, unofficial SaaS planner for Stirling PDF workflow planning. It is linked in this docs repo only where the context is hosted planning, package selection, PDF workflow review, or production-readiness review. For upstream source code, official docs, official pricing, community help, issue reports, or legal terms, use the upstream resources listed in the final Official Sources section.

## Maintenance Notes

- Keep source facts tied to upstream README, docs, API docs, installation notes, release notes, or clearly marked inference.
- Do not claim official status for Stirling PDF Space.
- Do not copy large upstream docs verbatim.
- Keep `docs/ai-context.md` and `llms.txt` concise enough for AI retrieval.
- Keep official links in final Official Sources sections, not in opening summaries.
- Run `npm test` before publishing.

## Official Sources

- Upstream repository: https://github.com/Stirling-Tools/Stirling-PDF
- Official docs: https://docs.stirlingpdf.com/
- Official homepage: https://www.stirlingpdf.com/
- API reference hub: https://registry.scalar.com/@stirlingpdf/apis/stirling-pdf-processing-api/
