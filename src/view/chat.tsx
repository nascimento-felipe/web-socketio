import { PaperPlaneRight } from "phosphor-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  getMessages,
  setMessages,
} from "../controller/HandleMessagesController";
import { Message } from "../model/Message";

export default function Chat() {
  const { state } = useLocation();

  const [mensagens, setMensagens] = useState<Message[]>([]);
  const [mensagemAtual, setMensagemAtual] = useState("");
  const [idCont, setIdCont] = useState(0);

  const username = state.username;
  const roomId = state.roomId;

  useState(() => {
    renderizarMensagens();
  });

  function sayRoom(id: number) {
    switch (id) {
      case 1:
        return "Node";
      case 2:
        return "Java";
      case 3:
        return "C#";
      case 4:
        return "C++";
      default:
        return "--";
    }
  }

  // essa funcao vai ser usada mais tarde por criar as mensagens dentro do site
  function renderizarMensagens() {
    try {
      getMessages(roomId).then((response) => {
        const msgs: Message[] = response.data;

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
  }

  async function adicionarMensagem() {
    await setMessages(mensagemAtual, username, roomId);
    setMensagemAtual("");
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Link to={"/"} className="bg-red-600 p-2 rounded-lg">
        Get out
      </Link>
      <div className="h-1/2 w-1/2 mt-10 outline decoration-solid flex flex-col items-center">
        <div className="font-bold text-lg">
          Ola {username}, esta eh a sala {sayRoom(roomId)}
        </div>
        <hr className="w-1/2" />
        <div className="w-full flex flex-col mt-5">
          {mensagens!.map((mensagem) => {
            if (mensagem.nameUser === username) {
              return (
                <div
                  className="w-fit px-5 mb-2 flex flex-col justify-end rounded-lg bg-zinc-700 self-end mr-2"
                  key={mensagem.id}
                >
                  <span className="text-sm text-sky-700">
                    {mensagem.nameUser}
                  </span>
                  <span>{mensagem.message}</span>
                </div>
              );
            } else {
              return (
                <div
                  className="w-fit px-5 ml-2 mb-2 flex flex-col rounded-lg bg-zinc-700"
                  key={mensagem.id}
                >
                  <span className="text-sm text-red-600">
                    {mensagem.nameUser}
                  </span>
                  <span>{mensagem.message}</span>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center">
        <input
          type="text"
          size={80}
          className="p-2 mt-2 rounded-lg bg-zinc-600 outline-none text-sm"
          placeholder="insira sua mensagem..."
          onChange={(event) => setMensagemAtual(event.target.value)}
          value={mensagemAtual}
          onKeyDown={async (key) => {
            if (key.code === "Enter") {
              await adicionarMensagem();
              renderizarMensagens();
            }
          }}
        />
        <button
          className="p-1 mt-2 hover:bg-zinc-800 hover:rounded-lg transition-all"
          onClick={adicionarMensagem}
          onKeyDown={async (key) => {
            if (key.code === "Enter") {
              await adicionarMensagem();
              renderizarMensagens();
            }
          }}
        >
          <PaperPlaneRight size={24} />
        </button>
      </div>
    </div>
  );
}
