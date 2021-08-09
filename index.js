// file system module it is bascally present int node inbuit

// const fileSystem = require("fs"); //importing file system module
// fileSystem.writeFileSync("noddy.txt", "hello noddy!!", function(err, result) {
//     if (err) {
//         console.log(err);
//     }
// });



//deleting text file created above



// const fileSystem = require("fs"); //importing file system module
// fileSystem.unlink("noddy.txt", function(err, result) {
//     if (err) {
//         console.log(err);
//     }
// });



//creating directory




// const fileSystem = require("fs"); //importing file system module
// fileSystem.mkdir("noddy", function(err, result) {
//     if (err) {
//         console.log(err);
//     }
// });





//removing directory that we created above




// const fileSystem = require("fs"); //importing file system module
// fileSystem.rmdir("noddy", function(err, result) {
//     if (err) {
//         console.log(err);
//     }
// });



// operating system module (also an inbuilt module)


//checking OS type



// const operatingSystem = require("os");
// console.log(operatingSystem.platform());



//chechking how much bits our OS has 



// const operatingSystem = require("os");
// console.log(operatingSystem.arch());



//http

//creating a server


const http = require("http");
http.createServer((request, Response) => {
    console.log(request.headers);
    Response.end("Hello Noddy!!");
}).listen(3000);