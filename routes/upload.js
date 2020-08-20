var express = require('express')
var multer = require('multer')

var storage = multer.memoryStorage()
var upload = multer({
  storage: storage
})

var router = express.Router()

router.get('/', function (req, res, next) {
  res.render('uploadForm.ejs')
})

router.get('/success', function (req, res, next) {
  var {fileName} = req.query
  res.render('uploadOK.ejs', {fileName})
})

router.post('/', upload.single('attachment'), function (req, res, next) {
  var resp = req.file;

   console.log(resp.buffer.toString());  

  
   (function(){
    res.redirect(`/`)
   })();     
  
})

module.exports = router
