/** React Native entry (picked by Metro / Jest): same API, real phone runtime by default. */
import { createBridge as createBridgeWith, type Bridge, type CreateBridgeConfig } from './bridge.js';
import { nativeRuntime } from './native.js';

export * from './index.js';

export function createBridge(config: CreateBridgeConfig): Bridge {
  return createBridgeWith({
    ...config,
    runtime: config.runtime ?? nativeRuntime({ installReferrer: config.installReferrer }),
  });
}
