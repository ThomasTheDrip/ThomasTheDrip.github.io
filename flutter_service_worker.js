'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"main.dart.js": "91fd268a04c2cccfec1a942bca0f7607",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "73afc5f9b960320b933b65dfc3d428ce",
"/": "73afc5f9b960320b933b65dfc3d428ce",
"manifest.json": "56128fc6ec7568b99d6fc24cfa34a218",
"flutter_bootstrap.js": "4c844389bc4d4f36464ebdfa084966cf",
".git/refs/heads/master": "80bc91890fe2a2d61cdfb2d3ab1ecba2",
".git/refs/remotes/origin/master": "80bc91890fe2a2d61cdfb2d3ab1ecba2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "5bb003222287e3b8cc817389fdb9c443",
".git/objects/34/4acfa5e3a8f762af4161747275baa29fd712a3": "66eb379f30feae578a32b9400b17acd9",
".git/objects/98/7afa30206b4003299a055db39c201f51b9cbfd": "42555060589452106f566d172bbdaa49",
".git/objects/7c/825128aa6d1dec8e4ffd8156b01efeddc8c8c2": "f3b5f64967a40c931f78a39d61585350",
".git/objects/1b/bedda7255c65d29f2b9506db923095b927b126": "0bd7cefd037b6d47111a43219d6a9089",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/81/f1b8fcf8c08c42b1d16ab713ede325a5d6160f": "bfa02aa5bfb10cb64f5ae27d798bcab2",
".git/objects/a1/9b2b762a60ea6f86c958655ac85e95aaea1b5b": "c16d95378311a32740ee20f97418e290",
".git/objects/0d/70ae34bfddb30f38f435239684f63f5f7ae575": "d151b1d4d1fb3a834258a5bad5a15386",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/89c3eb097e947e1c7aa10cb1ff7c6aa10e305a": "ea042d6443c75e9a5b74788b53f2abd8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/1e/5fdc3b656407ef9a30d0c9492466e66d42b1d2": "e9c2ffc967ffc98d5039e30c3e5f64b7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f9a11804a5d2b39b1f3b4a5916b18af80444b1": "9043e9f3ebfd96f460a8a9f2be6f85f6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/aa/afbf8a88bd4b7ed29d524e6d9cc580372aec33": "a65b1857011ab1b60192e1a67d2fdcc1",
".git/objects/bd/37538490c42fc2ab3b9d315c69d38b84a7fbd2": "29d8d70a6caf5d5fd956909d85ac0b73",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/58/25f8543d158b7469a819f652b985872d8b10fb": "1fc4a2e6b5491eba9b7a61a875a57ecb",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/01/ad7318b4ffc3b5b73ba29d4b9686a8c8d9c640": "89f2ee0529db6fb44a11198122d4e36c",
".git/objects/20/c15e91cd051ea41da6f2e0f1c23b4b143d6a20": "9f94e75a2f08d08aa762d2c7131dfdd7",
".git/objects/20/99775e97a937b5ffba925b85e0928c69cb027f": "4954b8d9c4e46f5ff1be98dd0e5a3337",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7b/146068b7744b0ebc4326cf5830bdfa1d82994b": "453aad51bf48ed9008ea371026c6d0a7",
".git/objects/c7/2abe76e3bebcada4734707b2b8bdadf0b79b50": "0e00c8db5d870bd3850abea6f438a8eb",
".git/objects/73/f18d8d9e6083ab31447e824c7f9a5195df8b62": "fb2d4ba8a1b911184176a0c44bedab26",
".git/objects/73/a2f90f48093b1d33e33f028e0fc7c20123e5a0": "dd1d8f630c30e81dd182c181ae09fca8",
".git/objects/55/8d9f9c2af2a19a6d69750f19b6e40d22be2b56": "063b5422cc490ef2389da632d213416f",
".git/objects/55/a7878a4cabdadefe7325454c8d6f64f797f9f2": "cc3c0b989a085622400eb81fb3a2ee61",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/5a8bc210a26a325b8eab423e694ea88d4e3de7": "699d44c1577a69b377876373a40d6959",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/4f/319ab3a7804d2783d0df7fbfae8ac10a677d2d": "af71c32fc497c0d443c0b13b57f390a5",
".git/objects/4f/b864c0d4e9ab1ec30bbffa8b1ea5d175d73066": "7bfc6c289a9ad1e71c82437767c562b7",
".git/objects/61/d811aeae3f9bce345ebe7b3f1f1b9a8e7bdd7f": "c873d66bd771194275626d1627ee6e92",
".git/objects/4d/be013db74b5b6533b11ceb815911aafa7e2454": "a960b8fa99623a272703e538247faea7",
".git/objects/4e/961ee64e3fa3aa1502a26c759dae6731dddb68": "de48ee33257d7645308569012b7de616",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/74/883db6059803930ad98e667e5e3fa6f24b5c05": "33ed16a9b08dbcec29bad3d18ef348bf",
".git/objects/be/e0fd615d446f4ca10656ba0394a63421464f3b": "eaf3d4cd8895d19fe08e5ab02d021b61",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/a5/c877a53132f84b1d13a8385c6aef0922418fbf": "5c9ba9ee125034720560bbb70ecf43a6",
".git/objects/67/16d3336178a991b5927c70be0a453a9d361722": "4af7a32c172195e562f13d696b9b90cf",
".git/objects/ac/f9616bc5ab5cad82d811d85ce04ac4ef6cdd44": "a37e1662246196f9b1d0bd02354404e3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/86/88c4b5a1a11879e37c8e60d9808b6739ae3206": "4aac8df5d1fd243b1d3a3107243c032b",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/8e/aa275eb03973569059ad740d14c35c9b103bcd": "9ae35aa4b0e551fb806bfc2e78954e9e",
".git/objects/2a/61adfcaf4f130502876322fb3f5afba30a7550": "0292ac65750933182740862eabe5b37a",
".git/objects/0c/404ac83e06028a50b7eff818cda6ce0b724405": "103d1d0bb6fea0ebef47196559fa2833",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/3c/d13e284be5b673f52e0fa46f5663524a33ab60": "85c524b6ccb8ebb71117b5c70e633201",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/63/71526abf5ed2f7ed19273baf7d052b346dee7e": "c7c513ee105f99f182402c90a9f5471b",
".git/objects/dc/8a594014d7f2e35f4c42cbe9fb6ea936e3d2cd": "d58f4a0d15076cf2f128d62ebbd6a6d5",
".git/objects/dc/accde1d35aded0a54569c6a02309e28e876475": "b8a862209d07629b91e9a3a38693f951",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/e4023e60026657f7b90e9641b2a380d97b0a41": "c28286f2663c96661fc64a8adbd120ee",
".git/objects/53/aae6cf95a969d2750fca074668b6471cc22c92": "8929bd81c78e426ca378a99a4451037c",
".git/objects/3a/32c32ee45bbe8c43d9c43ec09d9563c23964ca": "89ef0a9f385e283f30c2c35bda606e0e",
".git/objects/b2/a8225f87b97d07d824341353810cfebbe51828": "4d92e3ebe1b814351e00fa041b34cdca",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/8b765593211e7428600bf609a8d9f8542ffbfb": "334461d43e9b673611cca8baca3d3056",
".git/objects/27/f9218c7619358a2d30e0283c36336ec99b2027": "17cc3cec4c2c8b9d4363b5e1be3ed30a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/e4/341a86de76aadc98bb52539f17c75e49cc5e98": "a31ae335062835e3051d51d6b46b092d",
".git/objects/51/f823ea220bbdb9ae533c105bf75a7a975ac895": "ff19ed623b4966f94efdb17c5a7a68df",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/05/dfb74d7dcb036c08e04a4d6c68ff25ecf9748f": "986ce51c98d9fc09fea19c97882b8a44",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/9cab13feb5e2eea5111b58e848f99184ce9342": "07e711cafae904e02307451ec5050228",
".git/objects/a4/a74f33348494d5bcbe5aeb6560bf96fb339cd3": "b90d354b3c328de3b5643b09c06ec2d6",
".git/objects/f9/1d748deb621b75b086e6562230f3027b90c9b3": "8fcdf581867347d9a766ad37e6556661",
".git/objects/5e/7233a195856b596e930dc067ea7f48d85baf7c": "66a029105cd520d62bbd77079e3a7b42",
".git/objects/4b/757607c51335066ac9fb30d9a31789129b7139": "2920b516ab50ee10e19d446fe26a4b0f",
".git/index": "74c3f1b4081be51876dd82c28e155c43",
".git/logs/refs/heads/master": "a5605afb3b07ac2ce9a4af6827355a83",
".git/logs/refs/remotes/origin/master": "afe318acf0a52fb1778f7efb7b06fd61",
".git/logs/HEAD": "2290c6f19b2cf9a8f7ed8292cc9858eb",
".git/COMMIT_EDITMSG": "3ea5ea1f0a708d9ed845480d079eb083",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"assets/AssetManifest.bin.json": "3d673a3399ee26147021d74a7466500a",
"assets/lib/assets/manchester-united.webp": "7968dcafc5b48bd35338b014bdbebff6",
"assets/lib/assets/barcelona.webp": "13acdf47db1ffb28ab4896269c605b16",
"assets/lib/assets/ajax.webp": "cc1705cf353b2076b9c2595ce2412f5a",
"assets/lib/assets/aberdeen.webp": "ed56fbc3f1a102259d374b117358e75e",
"assets/lib/assets/juventus.webp": "293caf84fc8b83c5dd87f448e382d169",
"assets/lib/assets/girona.webp": "2c31bb7657cbc2c0c5371def5cae459c",
"assets/lib/assets/basel.webp": "ec8c7d7c8cb78232850e1e0910c97b5a",
"assets/lib/assets/monaco.webp": "16705915591bad21987f803ebc96f652",
"assets/lib/assets/crystal-palace.webp": "8df83663fd1d431e851637c82084b7f9",
"assets/lib/assets/inter-milan.webp": "ba9010d6eb902dbd5d41d5028510b795",
"assets/lib/assets/genoa.webp": "cb59d8b395eb6328c4f0bc0cda8f4465",
"assets/lib/assets/napoli.webp": "33f5e881d25b94a14a76ee1f190d5f19",
"assets/lib/assets/fiorentina.webp": "140e398d062e4cb46e8ce8c881440ed2",
"assets/lib/assets/milan.webp": "b87f9a17664990e955fb9b4b4b03b84b",
"assets/lib/assets/real-madrid.webp": "b4c24c7f1ee78dbf17dedcc011f64dd5",
"assets/lib/assets/everton.webp": "47bb4cdee4ed0cd388749e9d14248cf2",
"assets/lib/assets/arsenal.webp": "497ccfeca96beab7fa1b1656cc93f0ae",
"assets/lib/assets/atalanta.webp": "2871d61ce30c5e937f467892eea87c5e",
"assets/lib/assets/bayern.webp": "c3afd17473fc99aec67cbb54b2ac5a42",
"assets/lib/assets/real-sociedad.webp": "d0bb9451e5401026a4dc02a5673bdca4",
"assets/lib/assets/frankfurt.webp": "319b713e308dbaff9d1d35b7d044ea24",
"assets/AssetManifest.json": "a9c83c5f7f06ef7c4a2ded6d59bc92bd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "59f15a3a509051dcdb76c5f16f92860f",
"assets/fonts/MaterialIcons-Regular.otf": "aabeffb186b097057c8aa2c16863c549",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "b0774e85868b130533eed4274db86acc",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "389a6e6e6f34312743ca5f36467c84b5"};
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
