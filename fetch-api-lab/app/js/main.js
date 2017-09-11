var app = (function () {
  'use strict';

  function logResult(result) {
    console.log(result);
  }

  function logError(error) {
    console.log('Looks like there was a problem: \n', error);
  }

  if (!('fetch' in window)) {
    console.log('Fetch API not found, try including the polyfill');
    return;
  }

  function fetchJSON() {
    fetch('examples/animals.json') // 1
      .then(validateResponse) // 2
      .then(readResponseAsJSON) // 3
      .then(logResult) // 4
      .catch(logError)
  }

  function validateResponse(response) {
    if (!response.ok) {
      throw (response.statusText);
    }
    return response;
  }

  function readResponseAsJSON(response) {
    return response.json();
  }

  function showImage(responseAsBlob) {
    //  TODO 3a
  }

  function readResponseAsBlob(response) {
    // TODO 3b
  }

  function fetchImage() {
    // TODO 3c
  }

  function showText(responseAsText) {
    //  TODO 4a
  }

  function readResponseAsText(response) {
    // TODO 4b
  }

  function fetchText() {
    // TODO 4c
  }

  function headRequest() {
    // TODO 5.1
  }

  function logSize(response) {
    // TODO 5.2
  }

  /* NOTE: Never send unencrypted user credentials in production! */
  function postRequest() {
    // TODO 6.2
  }

  // Don't worry if you don't understand this, it's not part of the Fetch API.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    readResponseAsJSON: (readResponseAsJSON),
    readResponseAsBlob: (readResponseAsBlob),
    readResponseAsText: (readResponseAsText),
    validateResponse: (validateResponse),
    fetchJSON: (fetchJSON),
    fetchImage: (fetchImage),
    fetchText: (fetchText),
    headRequest: (headRequest),
    postRequest: (postRequest)
  };

})();