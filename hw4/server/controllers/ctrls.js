exports.promiseGetResponse = (promise, res, status) => {
  promise.then((val) => {
    res = addHeader(res, val);
    res.status(status).send(JSON.stringify(val));
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
};


exports.promisePostResponse = (promise, req, res, status) => {
  promise.then(() => {
    res = addHeader(res, req.body);
    res.status(status).send(JSON.stringify(req.body))
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err);
  })
};

function addHeader (res, val){
  res.set('X-Total-Count', val.length);
  res.set('Access-Control-Expose-Headers', 'X-Total-Count');
  return res;
}

exports.checkSession = (req, res) => {
  console.log(req.mySession);
  console.log("session check");

  if (req.mySession.username === undefined) {
    res = addHeader(res, {valid: false});
    res.status(401).send({valid: false});
  }

  return req.mySession.username;
};