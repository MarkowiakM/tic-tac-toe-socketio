import { FC } from "react";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";

const App: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-200">
      <RecoilRoot>
        <Outlet />
      </RecoilRoot>
    </div>
  );
};

export default App;
