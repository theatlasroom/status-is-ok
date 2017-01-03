# Status-is-ok
Check if the url is 200-A-Ok 🎈
[![NPM version](https://img.shields.io/npm/v/status-is-ok.svg?style=flat)](https://www.npmjs.com/package/status-is-ok) [![NPM download count](https://img.shields.io/npm/dm/status-is-ok.svg?style=flat)](https://www.npmjs.com/package/status-is-ok) [![license](https://img.shields.io/github/license/theatlasroom/status-is-ok.svg?style=flat)](https://www.npmjs.com/package/status-is-ok)

## Installation
npm: `npm install status-is-ok`
yarn: `yarn add status-is-ok`

## Usage
### Function
```
const IsOk = require('status-is-ok')
IsOk('http://xkcd.com')
```

### Callback
```
const IsOk = require('status-is-ok')
const isUrlOk = new IsOk()
isUrlOk.check('http://xkcd.com', callback)
```

### Promise
```
const IsOk = require('status-is-ok')
const isUrlOk = new IsOk();
isUrlOk.check('http://xkcd.com')
  .then(function)
  .catch(function)
```


The module exposes just a single function:
```
.check(url, [callback])
```
- this checks the url is ok, and will return a promise or return via the callback if one is specified

The callback and promise will return an object with the following keys:
```
{
  isOk: boolean | returns false on a failure
  status: status code returned | returns 404 on a failure
  message: status message
  error: any errors encountered | empty on a successful check
}
```

## Development
linting `yarn lint // or npm run lint`
running the test suite `yarn test // or npm test`

## Todo
* [x] check if the requested url is 200 status (OK)
* [x] write some tests
* [ ] handle arrays
* [ ] cli

## License
[MIT license](http://opensource.org/licenses/MIT)
