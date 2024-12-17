'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4f9f4ca03f6db2a84e6e15f81fdfc58f",
"assets/AssetManifest.bin.json": "d5d9dc53c9bac9c9ec8d4007c5a9e537",
"assets/AssetManifest.json": "2e6fbfb9cce9d63e317a7e3d58ae479b",
"assets/assets/images/bg1.jpg": "0a8939fe8daeb462e88190d31b8f149c",
"assets/assets/images/bg2.jpg": "d84bce2e452df2c0293946a1cbe30ee6",
"assets/assets/images/bg3.jpg": "6f8e576e1a963263ecc317fa6aa814c9",
"assets/assets/images/bg4.jpg": "a7f63c706d0be52891000bb3ee53164e",
"assets/assets/images/bg4.webp": "3b3d2d617f1587e3de355574bf70500d",
"assets/assets/images/bg5.jpg": "23cbcc206f4a853386bb4e93cee218c0",
"assets/assets/images/bg5.webp": "ee41d0950f6b3d26751fbe6355f29f22",
"assets/assets/images/file.png": "a13f6054ede996dea1aebdf3f5f63bf0",
"assets/assets/images/grafittiLap.jpg": "dadebc7af0be57dd74b3fcb3f35f596f",
"assets/assets/images/hozzologo.png": "3d4efe43a2c62de8ad244aee68b35aa6",
"assets/assets/images/mypic1.png": "109a02dedca470f99aae0ece4fa8fe4d",
"assets/assets/images/myPic2.png": "076b976b005fc3f460cd42e458a1d888",
"assets/assets/images/myPic2.webp": "1124b63cd531149a123afa9f94547e03",
"assets/assets/images/myPic3.png": "279ea5104f06fb45f76a5a9df96f02cf",
"assets/assets/images/newprofile.webp": "e4c8451a1ab4e7f3a21f68b9904a003e",
"assets/assets/lottie/inprogress.json": "778f8bd133078d43885a885f32ada5f0",
"assets/assets/lottie/lottie1.json": "1f6aeec6c8588033ca0a249f9bbcc831",
"assets/assets/lottie/lottie2.json": "056f203c1fc9b2061d57663a31ab7644",
"assets/assets/lottie/lottie3.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/assets/lottie/lottie4.json": "102603edbb786806c531a468ced722fc",
"assets/assets/lottie/lottie5.json": "5624059ab9ac9a15a10793e5cd3834d2",
"assets/assets/lottie/lottieme.json": "bd9e5acabdd6d618c4c3cd466ae1ede8",
"assets/assets/svg/adobe.svg": "637d26c31087f301fca2a9ee0091faf6",
"assets/assets/svg/api.svg": "2c4bd982019a6e5a2d8225a126cd2d6b",
"assets/assets/svg/c.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svg/contactd.svg": "e92b9f1698ebe1f90959d40262a17789",
"assets/assets/svg/contactl.svg": "8b937de105687abb09ffbfb61027d013",
"assets/assets/svg/css.svg": "45fb055fa6255e74baa94eb317a8abd2",
"assets/assets/svg/dart.svg": "fee3149820a9e475117012acb1cb7426",
"assets/assets/svg/edud.svg": "7d781f2629206fff8a391e90ce070cf2",
"assets/assets/svg/edul.svg": "7780cb2d6cb4d1fc2087fa787aa55c0a",
"assets/assets/svg/exp.svg": "e236c498701a8c199ce39fd5c4503b61",
"assets/assets/svg/figma.svg": "6c75ee30c2fbcaa599cf38d0270c9b77",
"assets/assets/svg/firebase.svg": "cc34c108a211552601e735af01eb2423",
"assets/assets/svg/flutter.svg": "f60a3bf9f9f984e00e33af91a3673e7c",
"assets/assets/svg/githubd.svg": "81c20062ac902cb1c429e4da0113bfa7",
"assets/assets/svg/githubl.svg": "e11b9bfc9e20f1bb159b7ed37f5d5310",
"assets/assets/svg/homed.svg": "3ab899870147d1966cf183041d6eca3a",
"assets/assets/svg/homel.svg": "108fd1da90336d51cf053107f5b13604",
"assets/assets/svg/html.svg": "0c9a2130468c0f075fd13caf6eac0d2b",
"assets/assets/svg/Inkscape.svg": "cc3a9a4bdfe1ca4951e3009ad90042fe",
"assets/assets/svg/insta_dark.svg": "5173e615928b3eb0806b02e350af1b6c",
"assets/assets/svg/insta_light.svg": "8cebad884c07a501a0093155c9b91ea1",
"assets/assets/svg/java.svg": "4e8df36231a85c4b577a6046963bc36a",
"assets/assets/svg/javascript.svg": "8902caa99186070eeb5289779445534f",
"assets/assets/svg/linkedin_dark.svg": "49ddb1b82789a0742bf4a95ea8d91731",
"assets/assets/svg/linkedin_light.svg": "e4c99bcb582e1896db88c52128365003",
"assets/assets/svg/maild.svg": "7a90354ccd49bbe6821410fbd302e150",
"assets/assets/svg/maill.svg": "373398c718e5132bdc3be0aec40ecd6f",
"assets/assets/svg/mongodb.svg": "714e2687ae0ac2892891d0bbb82e911f",
"assets/assets/svg/mysql.svg": "dc93b96a581ae78ff213586c0123f205",
"assets/assets/svg/nodejs.svg": "44e4fd46c7ac1e696952cd2ccfca36e9",
"assets/assets/svg/photoshop.svg": "6b704c295213f629d81330e8b794d183",
"assets/assets/svg/plugin.svg": "5b7c760092e40059b34a9d13a45f93a8",
"assets/assets/svg/projectd.svg": "3a7f0b5059502310d5de700a63f24bf8",
"assets/assets/svg/projectl.svg": "4a3c7162ef04e80895078420660dd1b0",
"assets/assets/svg/python.svg": "c73fc780c848b15821a97098596fb1f1",
"assets/assets/svg/resume.svg": "db5d1d1f42d9143be5c1cadc29099684",
"assets/assets/svg/skilld.svg": "a56df33485d6954e0697a51845a67884",
"assets/assets/svg/skilll.svg": "03d1aa481bbc0caf38f3a810b3c2028a",
"assets/assets/svg/whatsapp_dark.svg": "52a45d6025dde6711f78939d4cb78165",
"assets/assets/svg/whatsapp_light.svg": "7178f355e79edc4053aaebf38181a7ad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4365cf41000941cc868b27bfd39fb404",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/metaballs/lib/metaballs_shader.frag": "2db6b9a1394da174e429ce75f1ac0773",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "205a8a606f439495145c1dfb660fe182",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d3198c7c6bac680f3dda97068975ecc1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "77423b631267825ee79bc75a05840887",
"/": "77423b631267825ee79bc75a05840887",
"main.dart.js": "3a515bfed6f5e517b0583bb9abd1855e",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
