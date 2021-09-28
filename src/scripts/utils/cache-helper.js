import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this.OpenCache();
    cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this.FetchRequest(request);
      return response;
    }
    return this.FetchRequest(request);
  },

  async OpenCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async FetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this.AddCache(request);
    return response;
  },
  async AddCache(request) {
    const cache = await this.OpenCache();
    cache.add(request);
  },
};

export default CacheHelper;
