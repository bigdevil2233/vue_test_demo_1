var http = require('http');
function fn(){
  http.createServer(function(req, res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World</p>');
    console.log('服务器已启动');
  }).listen(3000);
}

exports.fn=fn();
