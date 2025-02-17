import { setupWorker } from 'msw/browser'

export const worker = setupWorker()

worker.start({
    serviceWorker: {
      // Specify the worker script URL relative to the _root_.
      url: '/my-app/mockServiceWorker.js',
      options: {
        // Override the scope to the root ("/").
        // By default, the worker is scoped to its location on your server,
        // which in this case would be "/prefix".
        scope: '/',
      },
    },
  })
