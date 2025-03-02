interface ImagenProps {
  imagen?: string;
}

function Imagen({ imagen }: ImagenProps) {

  if (!imagen) return null; // Evita errores si la imagen es undefined

  return (
    <div className="border-8 border-white rounded-3xl">
      <img
        src={imagen}
        alt="Pokemon"
        className="w-[500px] h-[500px] bg-white border-8 rounded-2xl border-red-500"
      />
    </div>
  );
}

export default Imagen;
