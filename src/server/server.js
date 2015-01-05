var portNumber = 8869;

var http = require("http");
var url = require("url");

var start = function(route, handle) {
    var onRequest = function(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk " + postDataChunk + ".");
        });

        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(portNumber);
    console.log("server start at http://localhost:" + portNumber);
}

exports.start = start;
