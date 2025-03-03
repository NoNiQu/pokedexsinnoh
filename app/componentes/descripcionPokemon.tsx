interface DescripcionPokemonProps {
  descripcion: string;
}

function DescripcionPokemon({ descripcion }: DescripcionPokemonProps) {
  return (
    <div className="flex bg-sky-600 platinum:bg-amber-600 pearl:bg-pink-500 p-6 gap-6 rounded-3xl border-4 border-sky-800 platinum:border-amber-800 pearl:border-pink-700 w-fit">
      <div className="px-10 py-4 bg-white rounded-2xl border-4 border-gray-700">
        <p className="text-5xl text-black">{descripcion}</p>
      </div>
    </div>
  );
}

export default DescripcionPokemon;
