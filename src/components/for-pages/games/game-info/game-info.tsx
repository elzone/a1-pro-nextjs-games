import { GameDataType } from "@/components/for-pages/games/types/game-data.type";
import { GameInfoItem } from "@/components/for-pages/games/game-info/game-info-item";
import Image from "next/image";

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
      <Image
        priority
        src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${identifier}.webp`}
        alt={`${title} - cover`}
        className={`w-full`}
        width={250}
        height={250}
      />
    </div>
  );
};

export { GameInfo };
