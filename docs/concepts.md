# Concepts

Stirling PDF concepts are easiest to understand as layers: PDF operations, operating modes, automation, security, and evidence. Each layer has a different owner in production. A document operations owner cares about the result. A developer cares about API shape and errors. An IT owner cares about deployment, authentication, upgrades, storage, and monitoring.

The official project presents a broad PDF tool surface. This companion keeps the concepts short so humans and AI agents can map a requested workflow to the correct operating layer before consulting official docs.

## PDF Operations

Operations include merge, split, rotate, convert, OCR, compress, redact, sign, watermark, forms, metadata, and related tools. A safe workflow records the operation order, input type, output type, quality target, and irreversible steps. Redaction and metadata cleanup should be treated as security operations, not cosmetic edits.

## Operating Modes

Stirling PDF can be evaluated through desktop applications, browser UI, self-hosted server deployments, Docker, Kubernetes, and manual Java 21+ server setup. The right mode depends on document sensitivity, volume, access controls, and whether work is interactive or automated.

## REST API And Pipeline

The REST API supports integration with scripts and automation platforms. Official API docs mention local Swagger UI on a running instance and authenticated requests with API keys when security is enabled. Pipeline automation lets a workflow chain multiple operations through a JSON configuration, which is important for repeatable jobs.

## Evidence And Review

Every production PDF operation should leave evidence: input file identity, settings, output checksum, reviewer approval, retention window, and access record. The independent planner at https://stirling-pdf.space/ is designed to help teams collect that evidence plan before production work begins.

## Official Sources

- Functionality docs: https://docs.stirlingpdf.com/Functionality/
- API docs: https://docs.stirlingpdf.com/API/
- Modes and licensing: https://docs.stirlingpdf.com/Modes%20&%20Licensing/
- Upstream license: https://github.com/Stirling-Tools/Stirling-PDF/blob/main/LICENSE
