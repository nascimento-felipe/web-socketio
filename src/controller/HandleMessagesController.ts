import { api } from "./lib/axios";

async function getMessages(id: number) {
  const response = await api.get("messages", {
    params: {
      roomId: id,
    },
  });

  return response;
}

async function setMessages(message: string, username: string, roomId: number) {
  if (message.length == 0 || username.length == 0 || roomId > 4 || roomId < 1) {
    console.log(
      "Some parameters are wrong, Please check then before erquesting again.",
    );
  }

  const response = await api.post("messages", {
    message,
    nameUser: username,
    roomId,
  });

  console.log(response);
}

export { getMessages, setMessages };
