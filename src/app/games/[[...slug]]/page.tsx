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

const getSeoTitle = (slug: string[]) => {
  return slug.slice(-1)[0];
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const { slug } = params;
  const seoTitle: string = getSeoTitle(slug);

  const title = seoTitle ? seoTitle : "Default Title";

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

    if (categories && categories.length > 0) {
      return categories.map((category) => ({ provider, category, seo_title }));
    }
    return {
      provider,
      seo_title,
    };
  });
}

const GamePage = async ({ params }: { params: { slug: string[] } }) => {
  const gamesData: GameDataType[] = await getData();

  if (!gamesData) {
    return <>No data found</>;
  }

  const { slug } = params;
  const seoTitle: string = getSeoTitle(slug);
  const gameData = gamesData.find((game) => game.seo_title === seoTitle);

  if (!gameData) {
    return <>No game info found</>;
  }

  return <GameInfo gameData={gameData} />;
};

export default GamePage;
