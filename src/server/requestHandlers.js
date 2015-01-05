var querystring = require("querystring");
var tools = require("./tools");

var start = function(response, postData) {
    console.log("request start");

    var body = '<!DOCTYPE html>'+
               '<html>'+
                   '<head>'+
                       '<meta charset="utf-8" />'+
                       '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">'+
                   '</head>'+
                   '<body>'+
                       '<form action="/upload" method="post">'+
                           '<textarea name="text" rows="20" cols="60"></textarea>'+ '<input type="submit" value="Submit text" />'+
                       '</form>'+
                   '</body>'+
               '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

var upload = function(response, postData) {
    console.log("request upload");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent the text: " + querystring.parse(postData).text);
    response.end();
}

var getIcon = function(response, postData) {
    tools.sendFile(response, "../static/icon/icon.png", "image/png");
}

var renderIndex = function(response, postData) {
    tools.sendFile(response, "../static/html/index.html", "text/html");
}

exports.getIcon = getIcon;
exports.start = start;
exports.upload = upload;
exports.renderIndex = renderInde;
