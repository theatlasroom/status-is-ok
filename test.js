
const IsOk = require('./index')
const test = require('tape')

const urls = {
  valid: 'https://google.com',
  invalid: 'https://goosgle.com',
  no_protocol: 'google.com',
  not_a_string: 1337
}

test('Init', function (t) {
  t.plan(3)
  const ok = new IsOk()
  t.ok(typeof ok === 'object')
  t.ok(ok instanceof IsOk)
  t.ok(typeof ok.check === 'function')
})

test('Can call the check function', function (t) {
  // t.plan(3);
  IsOk(urls.valid, function (err, res) {
    t.notOk(err)
    t.ok(res)
    t.end()
  })
})

test('Can execute the check callback', function (t) {
  const ok = new IsOk()
  ok.check(urls.valid, function (err, res) {
    t.notOk(err)
    t.ok(res)
    t.end()
  })
})

test('Can return a promise from check', function (t) {
  const ok = new IsOk()
  ok.check(urls.valid)
    .then(function (res) {
      t.ok(res)
      t.end()
    })
})

test('Fails when the url has no protocol', function (t) {
  t.plan(1)
  t.throws(function () {
    IsOk(urls.no_protocol)
  }, /The url is missing a valid protocol - http or https/)
})

test('Fails when the url is not a string', function (t) {
  t.plan(1)
  t.throws(function () {
    IsOk(urls.not_a_string)
  }, /The url passed in should be a string/)
})

test('Returns a proper response for a valid url', function (t) {
  IsOk(urls.valid, function (err, res) {
    const arr = ['message', 'isOk', 'status']
    t.notOk(err)

    arr.forEach(function (elem) {
      t.ok(res[elem])
    })

    t.notOk(res['error'])
    t.end()
  })
})

test('Returns an error for an invalid url', function (t) {
  IsOk(urls.invalid, function (err, res) {
    ['message', 'status', 'error'].forEach((elem) => {
      t.ok(err[elem])
    })

    t.notOk(err['isOk'])
    t.notOk(res)
    t.end()
  })
})

test.skip('Can handle array of urls')
test.skip('Can handle array of urls  failures')
