const isOk = require('./index');

const url = 'http://google.com';

console.log(isOk);
isOk(url, function(err, res){
  console.log(err);
  console.log(res);
});

const urlIsOk = new isOk();
urlIsOk.check(url, (err, res) => {
  console.log("CALLBACK");
  console.log(res);
});

urlIsOk
  .check(url).then((res) => {
    console.log("PROMISE");
    console.log(res);
  })
  .catch((err) => {
    console.log("PROMISE ERROR");
    console.error(err);
  });
