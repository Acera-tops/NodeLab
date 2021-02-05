const quotes = require("./quotes");//imports the array from quotes.js with require function

"use strict";

const http = require("http");
const { Console } = require("console");

http.createServer((req, res) => {
    const index = Math.floor(Math.random()* quotes.length)//math.random

    const randomQuote = quotes[index];//quote in index

    console.log(randomQuote);

    res.writeHead(200, {"Content-type": "text/plain"});
    res.write(randomQuote);
    res.end();
}).listen(3000)

console.log("http://localhost:" + 3000);



