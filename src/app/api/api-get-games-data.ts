import axios from "axios";

export const getGamesData = async () => {
  try {
    return axios.get(
      `https://nextjs-test-pi-hazel-56.vercel.app/data/games.json`
    );
  } catch (e: any) {
    throw e;
  }
};
