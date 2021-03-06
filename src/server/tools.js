var fs = require("fs");

var sendFile = function(response, filePath, type) {
    fs.readFile(filePath, "binary", function(error, file) {
        if(error) {
            response.writeHead("500", {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead("200", {"Content-Type": type});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.sendFile = sendFile;
