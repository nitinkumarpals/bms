import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", (ws) => {
  ws.on("message", async (message) => {
    const user = await client.user.create({
      data: {
        email: Math.random().toString(),
        password: Math.random().toString(),
      },
    });
    ws.send("hello");
  });
});
