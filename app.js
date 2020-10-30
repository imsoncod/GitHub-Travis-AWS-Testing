var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');

//express 서버 포트 설정
app.set('port', process.env.PORT || 80);

//서버 생성
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

//라우팅 모듈 선언
var test1 = require('./routes/api1');
var test2 = require('./routes/api2');

//request body json parser
app.use(bodyParser.json());

//request 요청 URL과 처리 로직을 선언한 라우팅 모듈 매핑
app.use('/test1', test1);
app.use('/test2', test2);