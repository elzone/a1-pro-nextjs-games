import { GameDataType } from "@/components/for-pages/games/types/game-data.type";
import { GameInfoItem } from "@/components/for-pages/games/game-info/game-info-item";
import Image from "next/image";
import { GameInfoItemImage } from "@/components/for-pages/games/game-info/game-info-item-image";

type GameInfoProps = {
  gameData: GameDataType;
};

const GameInfo = ({ gameData }: GameInfoProps) => {
  const { categories, identifier, provider, title } = gameData;
  return (
    <div
      className={`bg-white shadow p-6 space-y-2 rounded-lg w-72 min768:w-96`}
    >
      <h2 className={`text-2xl font-bold mb-5 leading-none`}>Game Info</h2>
      <GameInfoItem name={`Name:`} content={title} />
      <GameInfoItem name={`Provider:`} content={provider} />
      <GameInfoItem name={`Categories:`} content={categories.join(", ")} />
      <GameInfoItemImage identifier={identifier} title={title} />
    </div>
  );
};

export { GameInfo };
