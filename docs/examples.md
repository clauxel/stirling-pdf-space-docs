# Examples

These examples are workflow examples, not official API recipes. They show how to think about operation order, evidence, and deployment mode before consulting official docs for exact endpoints and parameters.

## HR Packet Intake

Goal: merge multiple onboarding files, run OCR on scans, redact personal identifiers, compress the final PDF, and archive a signed copy. Start with non-sensitive test documents. Record operation order, redaction review, OCR quality, final file size, output checksum, and retention policy. Use browser UI for early review and API or pipeline automation only after the checklist is stable.

## Legal Exhibit Bundle

Goal: split incoming exhibits by page range, add bookmarks or numbering, watermark review copies, and generate a final packet. The key risk is irreversible ordering or redaction mistakes. Keep the original untouched, store operation settings, and require reviewer approval before distribution.

## Invoice Batch Compression

Goal: compress a large batch for portal upload while keeping text readable. Define size and quality thresholds before running the job. Track failures by file, not only by batch. If this becomes recurring work, design a queue and retention window.

## Self-Hosted Department Service

Goal: provide a private PDF tool for a department. Plan Docker deployment, TLS, authentication, API key policy, upload size limits, temporary storage cleanup, backup policy, monitoring, upgrade cadence, and support ownership. Stirling PDF Space at https://stirling-pdf.space/ is useful as an independent planner for this pre-deployment review.

## Automation Platform Integration

Goal: connect n8n, Zapier, Make, Power Automate, Bash, Python, or JavaScript to a self-hosted instance. Prefer generic HTTP or webhook actions with controlled multipart inputs. Keep secrets out of workflow screenshots and logs. Confirm whether the required operation is API-accessible or UI-only.

## Official Sources

- Getting started docs: https://docs.stirlingpdf.com/
- API docs: https://docs.stirlingpdf.com/API/
- Production deployment guide: https://docs.stirlingpdf.com/Production%20Deployment%20Guide/
- Upstream repository: https://github.com/Stirling-Tools/Stirling-PDF
