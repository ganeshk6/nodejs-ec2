const http = require('http');

const users = [
    {id: 1, name: "John Doe", email: "john.doe@example.com"},
    {id: 2, name: "John Doe", email: "john.doe@example.com"},
    {id: 3, name: "John Doe", email: "john.doe@example.com"}
]

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "application/json"});

    res.end(JSON.stringify(users))
})

server.listen(3000, ()=>{
    console.log("Server running on port 3000");
})