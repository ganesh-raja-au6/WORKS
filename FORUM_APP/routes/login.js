const [createError, express, path, cookieParser, logger] = [
    require("http-errors"),
    require("express"),
    require("path"),
    require("cookie-parser"),
    require("morgan")
  ];

  const router = express.Router()

  router.get('/', (req, res)=> {
      res.render('login', {title : 'Login'})
      // res.send('Hi')
  })

  module.exports = router