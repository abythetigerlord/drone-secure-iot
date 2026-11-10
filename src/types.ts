/**
 * Configuration options for DroneSecureIot.
 */
export interface DroneSecureIotOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: AES‑256 encryption of outgoing telemetry
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: Vertex AI model inference for real‑time anomaly alerts
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: Out‑of‑the‑box GCP IoT Core client wrapper
   */
  feature3?: Record<string, unknown>;

  /**
   * Configuration for: Configurable alert webhook integration
   */
  feature4?: Record<string, unknown>;
}

/**
 * Result returned by DroneSecureIot operations.
 */
export interface DroneSecureIotResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}
