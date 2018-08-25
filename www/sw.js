/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/payment.js",
    "revision": "92037f579df6942676374c6496a4adf4"
  },
  {
    "url": "build/payment/ljjgtprv.es5.js",
    "revision": "19e439333bb4e2f4fd03d14ecaa6ca85"
  },
  {
    "url": "build/payment/ljjgtprv.js",
    "revision": "9498c6b69ad57c4cc455722d774d5ed0"
  },
  {
    "url": "build/payment/payment.7fbg2fen.js",
    "revision": "edf6c6d8510dac847e4913a8e240d3e5"
  },
  {
    "url": "build/payment/payment.o9eijd71.js",
    "revision": "a3d1088ddef587825057055defa3edf1"
  },
  {
    "url": "index.html",
    "revision": "0742457a989677f9fb6b77fa85cee59f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
