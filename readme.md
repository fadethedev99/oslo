# Oslo Deploy 🛸

A lightning-fast, custom CLI deployment engine built completely on native Node.js network streams and in-memory archiving.

## Architecture Highlights
* **Zero Disk Overhead:** Bundles local website assets instantly into RAM memory buffers using `adm-zip` without intermediate disk writing.
* **Streamlined Ingestion:** Ships payloads natively via HTTP POST streams to a background orchestration receiver.
* **Global CLI Execution:** Executable natively using `npx oslo-deploy`.

## Installation

```bash
npm install -g oslo-deploy