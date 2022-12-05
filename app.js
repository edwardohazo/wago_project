const http = require("http");


const server = http.createServer((req, res)=>{
    res.write('Welcome to my site');

    // ONCE THE RES IN SENDED WE FINISH THE CONECTION CLIENT/SERVER
    // SO THE CLIENT KNOWS THE RESPONSE IS ON TRANSIT AND READY TO BE RECIVED AND 
    // IS AT THAT MOMENT WHEN THE CLIENT RECIVE THE RESPONSE
    res.end();
});

const PORT = 5000;
server.listen(PORT, ()=>{
    console.log(`My first server with express! Port: ${PORT}!`);
});

