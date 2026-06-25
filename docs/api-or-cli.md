# API Or CLI

Stirling PDF evaluation often becomes an API question: can this repeatable PDF task be run without a person clicking through a UI? Public docs describe a local Swagger UI on a running instance, API authentication through user-specific or global API keys when security is enabled, and REST API integration with generic automation tools.

This companion treats API work as an operational design problem. The request shape matters, but so do queues, retry rules, file size limits, temporary storage, cleanup, and evidence. A working curl example is not production readiness by itself.

## API Planning Checklist

- Identify the operation group: merge, split, convert, OCR, compress, watermark, redact, sign, metadata, or pipeline.
- Decide whether the endpoint is backend-accessible or UI-only. Official docs note that not every function is available through the API.
- Choose authentication: per-user API keys for accountable human workflows or a global key for controlled automation.
- Store API keys outside code and logs.
- Send PDFs as multipart inputs only from trusted storage or controlled queues.
- Record output checksums, processing timestamps, settings, and errors.
- Add rate limits, retry caps, and dead-letter handling.
- Keep monitoring separate from document contents.

## Pipeline Automation

Pipeline automation is the best fit when one input needs several operations, such as OCR then compression then watermarking. Official docs describe a pipeline endpoint that accepts file inputs plus a JSON configuration. Build the workflow visually first, export the configuration, then adapt it into an automation job.

For hosted planning before writing automation, Stirling PDF Space at https://stirling-pdf.space/ can turn a goal into a review checklist and endpoint group recommendation.

## Official Sources

- API docs: https://docs.stirlingpdf.com/API/
- API reference hub: https://registry.scalar.com/@stirlingpdf/apis/stirling-pdf-processing-api/
- Pipeline automation docs: https://docs.stirlingpdf.com/Pipeline/
- Upstream repository: https://github.com/Stirling-Tools/Stirling-PDF
