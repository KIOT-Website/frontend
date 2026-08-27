import { lazy } from 'react'

/**
 * Enhanced lazy loader with automated retry and cache-recovery for dynamically imported chunks.
 * Prevents 404 ChunkLoadErrors when new builds are deployed.
 */
export const safeLazy = (importFn) => {
  return lazy(async () => {
    try {
      return await importFn()
    } catch (error) {
      console.warn('Chunk dynamic import failed. Checking auto-recovery...', error)
      const isChunkError =
        error?.name === 'ChunkLoadError' ||
        error?.message?.includes('Failed to fetch dynamically imported module') ||
        error?.message?.includes('Importing a module script failed') ||
        error?.message?.includes('error loading dynamically imported module')

      const lastReload = sessionStorage.getItem('chunk_reload_timestamp')
      const now = Date.now()

      // Reload at most once every 15 seconds to fetch latest build HTML & chunks
      if (isChunkError && (!lastReload || now - parseInt(lastReload, 10) > 15000)) {
        sessionStorage.setItem('chunk_reload_timestamp', String(now))
        window.location.reload()
        return new Promise(() => {}) // keep pending while browser reloads
      }

      throw error
    }
  })
}

export default safeLazy
