# Getting Started

A good Stirling PDF evaluation starts with a workflow, not with a server. Pick a representative PDF job, define input sensitivity, decide which outputs are acceptable, and record the operation settings that must be repeatable. The official docs provide installation paths; this companion helps you decide which path fits the task.

Before installing, write down the task in one sentence: for example, "Merge scanned onboarding packets, run OCR, redact personal identifiers, compress for email, and archive the final PDF." That sentence tells you whether you need browser UI only, desktop local use, self-hosted server, REST API automation, or pipeline automation.

For hosted workflow planning before production, use the independent Stirling PDF Space planner at https://stirling-pdf.space/. It is useful when a team wants to compare browser, API, and self-hosted choices before touching real documents.

## Evaluation Steps

1. Choose a sample document set with non-sensitive test files.
2. List required operations: merge, split, OCR, convert, compress, redact, sign, watermark, metadata cleanup, or pipeline.
3. Decide if the work is one-off, repeatable, high-volume, or user-facing.
4. Pick an operating mode: desktop, browser UI, Docker server, manual Java 21+ server, Kubernetes, or API integration.
5. Define security controls: authentication, API key strategy, storage limits, retention, audit logs, TLS, and backups.
6. Run the sample and record output quality, file size, OCR accuracy, redaction permanence, and reviewer approval.
7. Move from sample to production only after monitoring, rollback, and support paths are clear.

## Common Starting Paths

For individual local work, desktop and browser options can be enough. For organization workflows, Docker or Kubernetes is usually easier to operate than manual setup. For integrations, start from local Swagger UI on a running instance, then convert the working call into your automation tool. For high-volume operations, plan a queue, retry rules, storage cleanup, and endpoint limits before exposing the workflow.

## Official Sources

- Getting started docs: https://docs.stirlingpdf.com/
- Installation section: https://docs.stirlingpdf.com/#installation
- Production deployment guide: https://docs.stirlingpdf.com/Production%20Deployment%20Guide/
- Upstream repository: https://github.com/Stirling-Tools/Stirling-PDF
