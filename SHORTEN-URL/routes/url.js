var express = require('express');
var router = express.Router();
var shortid = require('shortid');
var validUrl = require('valid-url');

// Importing mongoose schema from models
const URL = require('../models/url.js')

// post request for url shortener
router.post('/shorurl', async (req, res, next) => {
  const {fullurl} = req.body;
  const baseurl = `${req.protocol}://${req.get('host')}`
  if(!validUrl.isUri(baseurl)) return res.status(401).send('Invalid URL');
  const urlshortener = shortid.generate()
  if(validUrl.isUri(fullurl)){
    try{
      const url = await URL.findOne({fullurl})
      if(url){
        return res.json(url)
      }else{
        const url = new URL({
          fullurl,
          shorturl : urlshortener,
          date : Date.now(),
        })
      }
    }catch(err){
      console.log(err.message);
    }
  }
})

module.exports = router;
