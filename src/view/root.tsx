import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

function Root() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState(0);

  return (
    <div className="w-screen h-screen">
      <form
        className="h-1/2 flex flex-col justify-center items-center"
        action=""
      >
        <h1 className="mb-7 font-bold text-3xl underline decoration-solid">
          Web Chat - Socket.io + React!
        </h1>
        <div>
          <input
            className="p-2 rounded-lg bg-slate-200 text-black placeholder:text-zinc-400"
            type="text"
            placeholder="username"
            onChange={(input) => {
              setUsername(input.target.value);
            }}
          />
          <select
            className="bg-slate-500 p-2 ml-6"
            name="rooms"
            onChange={(input) => {
              setRoomId(Number.parseInt(input.target.value));
            }}
          >
            <option value={-1}>Select one room</option>
            <option value={1}>Node</option>
            <option value={2}>Java</option>
            <option value={3}>C#</option>
            <option value={4}>C++</option>
          </select>
        </div>
        <Link
          to={"/chat"}
          state={{
            username,
            roomId,
          }}
          className="p-2 px-10 mt-6 rounded-lg bg-red-600 hover:bg-red-800 transition-colors"
        >
          Join
        </Link>
      </form>
    </div>
  );
}

export default Root;
