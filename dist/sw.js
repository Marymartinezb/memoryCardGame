importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/style.css",
    "revision": "30a74aa1fd5fb08643c00e0e3b0d5dff"
  },
  {
    "url": "img/berengena.png",
    "revision": "0aa0bc35ca133a7fdb904cdc90df7be2"
  },
  {
    "url": "img/cherry.png",
    "revision": "3b91bdd7cc90dfc163868241c75c8855"
  },
  {
    "url": "img/ghost1.png",
    "revision": "50313e0d7350700802dcfabae0e4accd"
  },
  {
    "url": "img/ghost2.png",
    "revision": "fe4972beefbf4e5175c1df312f533afa"
  },
  {
    "url": "img/honguito.png",
    "revision": "c9a540a5a17d3e7c3be7af683de9eed5"
  },
  {
    "url": "img/logo.png",
    "revision": "fa8a3055ba82857552413158a6838428"
  },
  {
    "url": "img/luigui.png",
    "revision": "57540e427dc8139dab1dcca43fff41f0"
  },
  {
    "url": "img/mario.png",
    "revision": "3a8f80303b4ee37e920ebf191810d63f"
  },
  {
    "url": "img/pacman.png",
    "revision": "3a485805cf507a8ca30b06a5bf6a9b81"
  },
  {
    "url": "img/pacwoman.png",
    "revision": "38ce5523907084cadb3b2d375b6b0201"
  },
  {
    "url": "img/zanahoria.png",
    "revision": "95e8981ac5c21481154aac39fb0f4bdf"
  },
  {
    "url": "index.html",
    "revision": "f4b13dc20f3adcf4f2e42fa58fae82cb"
  },
  {
    "url": "js/script.js",
    "revision": "7f11e4b4ae4fe0c95c0850a93aadf098"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
