/**
 * Custom error classes for drone-secure-iot.
 */

/**
 * Base error class for all DroneSecureIot errors.
 */
export class DroneSecureIotError extends Error {
  /** Machine-readable error code. */
  readonly code: string;

  constructor(message: string, code = "DRONESECUREIOT_ERROR") {
    super(message);
    this.name = "DroneSecureIotError";
    this.code = code;
  }
}

/**
 * Raised when the SDK is misconfigured.
 */
export class ConfigurationError extends DroneSecureIotError {
  constructor(message: string) {
    super(message, "CONFIGURATION_ERROR");
    this.name = "ConfigurationError";
  }
}

/**
 * Raised when input validation fails.
 */
export class ValidationError extends DroneSecureIotError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

/**
 * Raised when an operation exceeds its time limit.
 */
export class TimeoutError extends DroneSecureIotError {
  constructor(message: string) {
    super(message, "TIMEOUT_ERROR");
    this.name = "TimeoutError";
  }
}
