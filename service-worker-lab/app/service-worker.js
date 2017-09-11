(function () {
  'use strict';

  self.addEventListener('install', function (event) {
    console.log('Service worker installing...');
    //good place for caching static assets
    // TODO 3.4: Skip waiting
    self.skipWaiting();

  });

  self.addEventListener('activate', function (event) {
    console.log('Service worker activating...');
    //take control of the page here
  });

  //3.3: Update the service worker
  // Im a new service workern          nnnnn



  // TODO - 4: Add fetch listener

  self.addEventListener('fetch', function (event) {
    console.log('Fetching:', event.request.url);
  });


})();
