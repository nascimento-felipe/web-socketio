import { api } from "./lib/axios";

async function getMessages(id: number) {
  const response = await api.get("messages", {
    params: {
      roomId: id,
    },
  });

  return response;
}

async function setMessages() {}

export { getMessages, setMessages };
