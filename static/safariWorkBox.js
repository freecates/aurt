workbox.routing.registerRoute(
  /.*\.mp4/,
  workbox.strategies.cacheFirst({
    cacheName: 'videos-mp4',
    plugins: [
      new workbox.cacheableResponse.Plugin({ statuses: [200] }),
      new workbox.rangeRequests.Plugin()
    ]
  })
)
