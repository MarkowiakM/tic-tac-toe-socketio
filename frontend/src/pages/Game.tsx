import {SocketProvider} from "@/components/SocketProvider";
import { nameState } from "@/state/name";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
const Game: FC = () => {
  const name = useRecoilValue(nameState);
  const navigate  = useNavigate();

  if (!name) {
    navigate("/");
  }

  return <main className="flex flex-col gap-10 items-center p-8 rounded-lg shadow-md bg-slate-100">
    <SocketProvider>
    <h1>Game</h1>
      <p>Playing as: {name}</p>
      </SocketProvider>
  </main>;
};

export default Game;
