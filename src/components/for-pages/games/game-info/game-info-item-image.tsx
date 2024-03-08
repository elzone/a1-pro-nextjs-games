import Image from "next/image";

type GameInfoItemImageProps = {
  identifier: string;
  title: string;
};

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const GameInfoItemImage = ({ identifier, title }: GameInfoItemImageProps) => {
  return (
    <Image
      priority
      src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${identifier}.webp`}
      alt={`${title} game cover image`}
      className={`w-full h-auto`}
      width={250}
      height={250}
      placeholder={`blur`}
      blurDataURL={rgbDataURL(248, 248, 248)}
    />
  );
};

export { GameInfoItemImage };
