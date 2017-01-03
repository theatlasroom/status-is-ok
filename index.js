'use strict'
const axios = require('axios')

function hasProtocol (url) {
  const regex = /https*:\/\//
  return url.match(regex)
}

function StatusIsOk (url, cb) {
  if (typeof url !== 'undefined') {
    if (typeof url !== 'string') throw new Error('The url passed in should be a string')
    return checkUrl(url, cb)
  }
}

StatusIsOk.prototype.check = checkUrl

function checkUrl (url, cb) {
  // assert.ok(hasProtocol(url), 'The url is missing a valid protocol - http or https')
  if (!hasProtocol(url)) throw new Error('The url is missing a valid protocol - http or https')
  if (cb) {
    return isOk(url, cb)
  }
  return promiseIsOk(url)
}

function isOk (url, cb) {
  axios
    .get(url)
    .then((response) => {
      const msg = prepareResponse(response)
      cb(null, msg)
    })
    .catch((err) => {
      cb(sendError(err))
    })
}

function promiseIsOk (url) {
  return new Promise(function (resolve, reject) {
    axios
      .get(url)
      .then((response) => {
        const msg = prepareResponse(response)
        resolve(msg)
      })
      .catch((err) => {
        reject(sendError(err))
      })
  })
}

// any failure, return a 404
function sendError (error) {
  return {
    isOk: false,
    status: 404,
    message: 'Not found',
    error
  }
}

function prepareResponse (response) {
  return {
    isOk: response.status === 200,
    status: response.status,
    message: response.statusText,
    error: null
  }
}

module.exports = StatusIsOk
