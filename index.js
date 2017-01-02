const assert = require('assert');
const axios = require('axios');

function hasProtocol(url){
  const regex = /https*\:\/\//;
  return url.match(regex);
}


let StatusIsOk = function(url, cb){
  if (typeof url !== 'undefined'){
    assert.equal(typeof url, 'string', 'The url passed in should be a string');
    return checkUrl(url, cb);
  }
}

StatusIsOk.prototype.check = checkUrl;

function checkUrl(url, cb){
  assert.ok(hasProtocol(url), 'The url is missing a protocol');
  this.url = url;
  if (cb)
    return isOk(this.url, cb);
  return promiseIsOk(this.url);
}

function isOk(url, cb){
  axios
    .get(url)
    .then((response) => {
      const msg = prepareResponse(response);
      cb(null, msg);
    })
    .catch((err) => {
      cb(sendError(err));
    });
}

function promiseIsOk(url){
  return new Promise(function(resolve, reject) {
    axios
      .get(url)
      .then((response) => {
        const msg = prepareResponse(response);
        resolve(msg);
      })
      .catch((err) => {
        reject(sendError(err));
      });
  });
}

// any failure, return a 404
function sendError(error){
  return {
    isOk: false,
    status: 404,
    message: 'Not found',
    error,
  };
}

function prepareResponse(response){
  return {
    isOk: response.status === 200,
    status: response.status,
    message: response.statusText,
    error: null,
  };
}

module.exports = StatusIsOk;
