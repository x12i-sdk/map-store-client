import { configureMapStore, fetchHealth } from '@x12i/map-store-client';

export async function runExample() {
const assert = condition => { if (!condition) throw new Error('Fixture assertion failed'); };
assert.equal = (actual, expected) => { if (actual !== expected) throw new Error('Unexpected fixture result'); };

const originalFetch = globalThis.fetch;
try {
  configureMapStore({ resolveOrigin: () => 'https://map-store.example.invalid' });
  globalThis.fetch = async (url) => {
    assert(String(url).includes('/map-store/v1'));
    return Response.json({ ok: true, service: 'fixture', memorixReachable: true, estateReady: true });
  };
  const health = await fetchHealth();
  assert.equal(health.estateReady, true);
  console.log(health);
} finally { globalThis.fetch = originalFetch; }
// The response is synthetic and does not describe a live estate.

}
