const WebSocket = require("ws");
const url = "ws://localhost:8080";
const connection = new WebSocket(url);

connection.onopen = () => {
  connection.send("Hi Client");
};

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`);
};

connection.onmessage = (e) => {
  console.log(e.data);
};

// const WebSocket = require("ws");

// const wss = new WebSocket.Server({ port: 8080 });
// console.log("object", process.env.PORT);

// wss.on("connection", (ws) => {
//   ws.on("message", (message) => {
//     console.log(`Received message => ${message}`);
//   });
//   ws.send("Hello! Message From Server!!");
// });
