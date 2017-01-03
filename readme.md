# Readme
Check if the url is 200-A-Ok 🎈

## Installation
npm: `npm install status-is-ok`
yarn: `yarn add status-is-ok`

## Usage
Returns an object with the following keys:
- `isOk`: boolean
- `status`: status code returned
- `message`: status message
- `error`: any errors encountered

As a function
`const IsOk = require('status-is-ok')
IsOk('http://xkcd.com')
`

Callback
`const IsOk = require('status-is-ok')
IsOk('http://xkcd.com', callback);
`

Promise
`const IsOk = require('status-is-ok')
IsOk('http://xkcd.com')
  .then(function)
  .catch(function)`

## Todo
* [x] check if the requested url is 200 status (OK)
* [x] write some tests...
* [ ] handle arrays
* [ ] cli

## License
[MIT license](http://opensource.org/licenses/MIT)
