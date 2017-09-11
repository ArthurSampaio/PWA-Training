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
    var container = document.getElementById('container');
    var imgElem = document.createElement('img');
    container.appendChild(imgElem);
    var imgUrl = URL.createObjectURL(responseAsBlob);
    imgElem.src = imgUrl;
  }

  function readResponseAsBlob(response) {
    return response.blob();
  }

  function fetchImage() {
    fetch('examples/kitten.jpg')
      .then(validateResponse)
      .then(readResponseAsBlob)
      .then(showImage)
      .catch(logError);
  }

  function showText(responseAsText) {
    var message = document.getElementById('message');
    message.textContent = responseAsText;
  }

  function readResponseAsText(response) {
    return response.text();
  }

  function fetchText() {
    fetch('examples/words.txt')
      .then(validateResponse)
      .then(readResponseAsText)
      .then(showText)
      .catch(logError);
  }

  function headRequest() {
    fetch('examples/words.txt', {
      method: 'HEAD'
    })
      .then(validateResponse)
      .then(logSize)
      .then(readResponseAsText)
      .then(logResult)
      .catch(logError);
  }

  function logSize(response) {
    console.log(response.headers.get('content-length'));
    return response;
  }

  /* NOTE: Never send unencrypted user credentials in production! */
  function postRequest() {
    var formData = new FormData(document.getElementById('myForm'));
    fetch('http://localhost:5000/', {
      method: 'POST',
      body: formData,
    })
      .then(validateResponse)
      .then(readResponseAsText)
      .then(logResult)
      .catch(logError);
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
