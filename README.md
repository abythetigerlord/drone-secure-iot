# drone-secure-iot

Encrypt UAV telemetry and run AI anomaly detection via GCP IoT Core

## Installation

```bash
npm install drone-secure-iot
```

## Quick Start

```typescript
import { DroneSecureIot } from "drone-secure-iot";

const instance = new DroneSecureIot();
const result = await instance.run();
console.log(result);
```

## Features

- AES‑256 encryption of outgoing telemetry
- Vertex AI model inference for real‑time anomaly alerts
- Out‑of‑the‑box GCP IoT Core client wrapper
- Configurable alert webhook integration

## API Reference

### `DroneSecureIot`

#### Constructor

```typescript
new DroneSecureIot(options?: DroneSecureIotOptions)
```

#### Methods

- `run()` - Execute the main operation. Returns `Promise<DroneSecureIotResult>`.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run lint
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub release with tag `v0.x.0`
3. The GitHub Action will automatically publish to npm

## License

MIT
