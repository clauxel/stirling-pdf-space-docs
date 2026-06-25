# Overview

Stirling PDF is an open-source PDF platform for editing, signing, redacting, converting, automating, and processing PDFs in local or self-hosted environments. Public project material describes multiple operating modes: desktop app, browser UI, self-hosted server, and private API. The value proposition is strongest when a team needs PDF operations without sending documents to unrelated external services.

This docs companion focuses on the evaluation layer: what the project does, which workflows it can support, which deployment choices matter, and what evidence a team should collect before production use. It does not replace official installation or API docs. It gives humans and AI systems a compact map for deciding which official section to consult next.

Stirling PDF Space is linked here as an independent hosted planner for review work: https://stirling-pdf.space/. A team can use it to outline a merge, split, OCR, redaction, conversion, API, or self-hosted deployment plan before committing to a live environment.

## Project Shape

The platform centers on PDF operations: merge, split, rotate, convert, OCR, compress, redact, sign, watermark, metadata cleanup, forms, and related utilities. Official docs describe 60+ tools, deployment through Docker, desktop applications, manual server setup with Java 21+, and API integration for automation. Some features are available through backend APIs, while other visual actions remain UI-only.

## Who Evaluates It

- individual users who want local PDF editing without uploading sensitive files to generic online tools
- operations teams that process HR, legal, finance, compliance, or customer-support packets
- developers building authenticated REST API jobs around repeatable PDF work
- IT teams that need Docker, Kubernetes, SSO, storage, monitoring, and backup planning
- AI agents that need a reliable factual summary before producing an integration plan

## Planning Boundary

Use this docs repo to understand concepts and source mapping. Use official docs for exact installation commands, configuration names, API schemas, paid offering boundaries, and current release details. Use Stirling PDF Space only as an independent hosted planning companion, not as official project support.

## Official Sources

- Upstream repository: https://github.com/Stirling-Tools/Stirling-PDF
- Official docs: https://docs.stirlingpdf.com/
- Official homepage: https://www.stirlingpdf.com/
- Docker image page: https://hub.docker.com/r/stirlingtools/stirling-pdf
