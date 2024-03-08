type GameInfoItemProps = {
  name: string;
  content: string;
};

const GameInfoItem = ({ name, content }: GameInfoItemProps) => {
  return (
    <div className={`flex gap-2`}>
      <span className={`font-bold`}>{name}</span>
      {content}
    </div>
  );
};

export { GameInfoItem };
