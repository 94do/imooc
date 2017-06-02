var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'jade')
app.listen(8181);

console.log('imooc started ' );

//index page
app.get('/', function (req, res) {
    res.render('pages/index',{
        title: 'imooc 首页'

    })
})
//detail page
app.get('/movie/:id', function (req, res) {
    res.render('pages/detail',{
        title: 'imooc 详情页'

    })
})
//admin page
app.get('/admin/movie', function (req, res) {
    res.render('pages/admin',{
        title: 'imooc 后台录入页'

    })
})
//list page
app.get('/admin/list', function (req, res) {
    res.render('pages/list',{
        title: 'imooc 列表页'

    })
})