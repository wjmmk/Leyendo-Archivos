var express = require('express')
var fs = require('fs')
var path = require('path')
var util = require('util')
var multer = require('multer')

var storage = multer.memoryStorage()
var upload = multer({
  /* dest: 'public/uploads',
  limits: '5000000', */
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


/* router.post('/', upload.single('attachment'), function (req, res, next) {
  var resp = req.file;
  console.log(resp.buffer.toString());  
   return storeWithOriginalName(req.file)
    .then(encodeURIComponent)
    .then(encoded => {
      res.redirect(`/upload/success?fileName=${encoded}`)
    })
    .catch(next)
})

// Aqui debo controlar MemoryStorage 
function storeWithOriginalName (file) {
  var fullNewPath = path.join(file.destination, file.originalname)
  var rename = util.promisify(fs.rename)

  return rename(file.path, fullNewPath)
    .then(() => {
      return file.originalname
    })
}  */

module.exports = router
