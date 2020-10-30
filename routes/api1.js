/**
 * http://usejsdoc.org/
 */

var express = require('express');
var router = express.Router();
const request = require('request');

/*

router.{Method}('{String}', function(req, res)){

	res.send() : 문자열로 응답
	res.json() : Json으로 응답
	res.render() : html변환 템플릿을 렌더링(ejs)
	res.sendfile() : 파일 다운로드

}

*/

router.get('/', function(req, res){
	res.status(200).json(		
		{
			"json key" : "Test1"
		}
	);	
});


//모듈에 등록해야 app.js에서 app.use 함수를 통해서 사용 가능
module.exports = router;