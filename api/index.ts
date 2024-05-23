const WebSocket = require("ws");
const port = process.env.PORT || 4000;

const https = require('https');
const fs = require('fs');

const server = https.createServer({
  key: fs.readFileSync('path/to/private-key.pem'),
  cert: fs.readFileSync('path/to/certificate.pem')
}, (req, res) => {
  
});

const wss = new WebSocket.Server({ port, server });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});

