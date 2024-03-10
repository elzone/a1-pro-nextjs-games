import { PropsWithChildren } from "react";

const GameLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={`flex items-center justify-center h-screen`}>
      {children}
    </div>
  );
};

export default GameLayout;
