import "../styles/global.css";

function Root() {
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
          />
          <select className="bg-slate-500 p-2 ml-6" name="rooms">
            <option value="-1">Select one room</option>
            <option value="node">Node</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="cpp">C++</option>
          </select>
        </div>
        <button className="p-2 px-10 mt-6 rounded-lg bg-red-600 hover:bg-red-800 transition-colors">
          Join
        </button>
      </form>
    </div>
  );
}

export default Root;
