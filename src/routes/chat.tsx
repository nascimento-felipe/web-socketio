import { useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Mensagem {
  createdAt: Date;
  id: string;
  message: string;
  nameUser: string;
  room_id: number;
}

export default function Chat() {
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);

  const minhaMsgStyle = "w-full flex justify-end mr-10";
  const outroUserMsgStyle = "w-full flex justify-start ml-10";

  useState(() => {
    renderizarMensagens();
  });
  // essa funcao vai ser usada mais tarde por criar as mensagens dentro do site
  function renderizarMensagens() {
    try {
      api
        .get("messages", {
          params: {
            roomId: 1,
          },
        })
        .then((response) => {
          const msgs: Mensagem[] = response.data;

          msgs.sort((a, b) => {
            if (a.createdAt < b.createdAt) {
              return -1;
            } else if (a.createdAt > b.createdAt) {
              return 1;
            } else {
              return 0;
            }
          });

          setMensagens(msgs);
        });
    } catch (error) {
      console.log(error);
    }
    return;
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <button className="bg-red-600 p-2 rounded-lg hover:">Get out</button>
      <div className="h-1/2 w-1/2 mt-10 outline decoration-solid flex flex-col items-center">
        <div className="font-bold text-lg">Ola username, esta eh a sala --</div>
        <hr className="w-1/2" />
        {mensagens!.map((mensagem) => {
          if (mensagem.nameUser === "Felipe") {
            return (
              <span className={minhaMsgStyle} key={mensagem.id}>
                {mensagem.message}
              </span>
            );
          } else {
            return (
              <span className={outroUserMsgStyle} key={mensagem.id}>
                {mensagem.message}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
}
