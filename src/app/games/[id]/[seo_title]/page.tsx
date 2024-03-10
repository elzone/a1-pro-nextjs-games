import { getGamesData } from "@/app/api/api-get-games-data";
import { GameDataType } from "@/components/for-pages/games/types/game-data.type";
import { GameInfo } from "@/components/for-pages/games/game-info/game-info";

const getData = async () => {
  const response = await getGamesData();

  if (response.data) {
    return response.data as GameDataType[];
  }

  return [];
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string; seo_title: string };
}) => {
  const { seo_title } = params;

  const title = seo_title ?? "Default Title";

  const description = "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
};

export async function generateStaticParams() {
  const gamesData: GameDataType[] = await getData();

  return gamesData.map((gameData) => {
    const { categories, provider, seo_title } = gameData;
    const allIds: string[] = [...categories, provider];

    if (categories && categories.length > 0) {
      return categories.map((category) => ({ id: category, seo_title }));
    }
    return {
      id: provider,
      seo_title,
    };
  });
}

const GamePage = async ({
  params,
}: {
  params: { id: string; seo_title: string };
}) => {
  const gamesData: GameDataType[] = await getData();

  if (!gamesData) {
    return <>No data found</>;
  }

  const { seo_title } = params;
  const gameData = gamesData.find((game) => game.seo_title === seo_title);

  if (!gameData) {
    return <>No game info found</>;
  }

  return <GameInfo gameData={gameData} />;
};

export default GamePage;
