interface ImagenProps {
  imagen?: string;
}

function Imagen({ imagen }: ImagenProps) {
  if (!imagen) return null; // Evita errores si la imagen es undefined

  return (
    <div className="border-8 border-yellow-300 rounded-3xl w-full md:w-fit">
      <img
        src={imagen}
        alt="Pokemon"
        className="w-full sm:w-[300px] md:w-[550px] h-full sm:h-[300px] md:h-[550px] bg-white border-8 rounded-2xl border-cyan-400"
      />
    </div>
  );
}

export default Imagen;
