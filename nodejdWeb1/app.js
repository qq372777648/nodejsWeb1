var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// json类型body
app.use(bodyParser.json()); //所有post请求 的请求体 还原成json
// query string类型body
app.use(bodyParser.urlencoded({//url 解码
	extended: false
}));

// 静态文件目录
app.use(express.static(__dirname + '/public'));//如果匹配静态资源，直接相应文件

// 路由与业务逻辑
app.use('/user', require('./routes/users.js'));

app.listen(80);
