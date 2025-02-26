interface PokeballImageProps {
  legendario: boolean;
  faseEvolutiva: number;
  spriteMiniatura: string;
}

function PokeballImage({
  legendario,
  faseEvolutiva,
  spriteMiniatura,
}: PokeballImageProps) {
  function getImage(): string {
    if (legendario) {
      return "0.png";
    } else {
      switch (faseEvolutiva) {
        case 1:
          return "1.png";
        case 2:
          return "2.png";
        case 3:
          return "3.png";
        default:
          return "1.png";
      }
    }
  }

  const imageSrc = getImage();

  return (
    <div className="rounded-4xl relative w-24 h-24 flex items-center justify-center">
      <img src={imageSrc} alt="pokemon" className="w-24 h-24 opacity-70" />
      <img
        src={spriteMiniatura}
        alt="sprite"
        className="absolute -top-10 left-0 w-30 h-30"
      />
    </div>
  );
}

export default PokeballImage;
