interface DescripcionPokemonProps {
  descripcion: string;
}

function DescripcionPokemon({ descripcion }: DescripcionPokemonProps) {
  return (
    <div className="flex bg-blue-400 p-6 gap-6 rounded-3xl border-4 border-blue-700 w-fit">
      <div className="px-10 py-4 bg-white rounded-2xl border-4 border-gray-600">
        <p className="text-5xl text-black">{descripcion}</p>
      </div>
    </div>
  );
}

export default DescripcionPokemon;
