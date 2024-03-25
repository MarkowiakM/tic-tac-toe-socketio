import { nameState } from "@/state/name";
import { Loader } from "lucide-react";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const WaitingRoom: FC = () => {
  const [name, setName] = useState("");
  const setNameState = useSetRecoilState(nameState);
  const navigate  = useNavigate();

  const handleJoinGame = () => {
    setNameState(name);
    navigate("/game");
  };

  return (
    <main className="flex flex-col gap-10 items-center p-8 rounded-lg shadow-md bg-slate-100">
      <h1 className="text-2xl font-bold text-slate-700">Tic Tac Toe</h1>
      <div className="flex flex-col gap-4">
        <label htmlFor="name" className="text-lg">
          Enter your name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-black rounded-lg w-[400px] h-[40px] px-4"
          autoComplete="off"
        />
      </div>
      <button
        onClick={handleJoinGame}
        className="bg-slate-700 text-white font-bold rounded-lg w-[400px] h-[40px]"
      >
        Join Game
      </button>
      <Loader size={48} className="animate-spin mt-4" />
    </main>
  );
};

export default WaitingRoom;
