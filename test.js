const IsOk = require('./index')

const url = 'httsp://google.com'

console.log(IsOk)
IsOk(url, function (err, res) {
  console.log(err)
  console.log(res)
})

const UrlIsOk = new IsOk()
UrlIsOk.check(url, (err, res) => {
  console.log('CALLBACK')
  console.log(res)
})

UrlIsOk
  .check(url).then((res) => {
    console.log('PROMISE')
    console.log(res)
  })
  .catch((err) => {
    console.log('PROMISE ERROR')
    console.error(err)
  })
