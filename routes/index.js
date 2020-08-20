var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Administre su campaña de MERCADEO...' , Subtitle: 'Mercadeo~Mix'})
})

module.exports = router
