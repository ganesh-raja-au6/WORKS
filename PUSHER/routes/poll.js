var router = require('express').Router();
var Pusher = require("pusher");

var pusher = new Pusher({
  appId: "966807",
  key: "75074464d38239f52321",
  secret: "700c235f72ac8ca4b10a",
  cluster: "ap2",
  encrypted: true
});

/* GET users listing. */
router.get('/', (req, res, next)=> {
  res.send('respond with a resource');
});

router.post('/', (req, res)=> {
  pusher.trigger('os-poll', 'os-vote', {
    points : 1,
    os : req.body.os
  });
  return res.json({success : true, message : 'Thank You For Voting'})
})

module.exports = router;
