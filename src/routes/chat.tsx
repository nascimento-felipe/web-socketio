export default function Chat() {
  // essa funcao vai ser usada mais tarde por criar as mensagens dentro do site
  function renderizarMensagens() {}

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <button className="bg-red-600 p-2 rounded-lg hover:">Get out</button>
      <div className="h-1/2 w-1/2 mt-10 outline decoration-solid flex flex-col items-center">
        <div className="font-bold text-lg">Ola username, esta eh a sala --</div>
        <hr className="w-1/2" />
      </div>
    </div>
  );
}
