var url = require('url');
var queryString = require('querystring');

var addr = 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&oquery=%EC%BF%A0%ED%8C%A1&ie=utf8&query=node.js+os+%EB%AA%A8%EB%93%88';
console.log(queryString.stringify({ sm: 'tab_hty.top', where: 'nexearch', oquery: '쿠팡',  ie: 'utf8',	  query: 'node.js os 모듈' })) ;//    parse(parseUrl.query));
