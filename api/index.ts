const WebSocket = require("ws");
const port = process.env.PORT || 4000;

const wss = new WebSocket.Server({ port });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
