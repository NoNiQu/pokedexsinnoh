import type { Pokemon } from "~/types/pokemon";

interface CabeceraPokemonProps {
  pokemon: Pokemon;
}

function CabeceraPokemon({ pokemon }: CabeceraPokemonProps) {
  return (
    <div className="bg-amber-200 rounded-4xl py-5 px-12 text-5xl text-black">
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-6 text-center md:text-left">
        <p className="pl-0">
          {String(pokemon.id).padStart(3, "0")} {pokemon.nombre.toUpperCase()}
        </p>
        <p>{pokemon.tipoPokemon}</p>
      </div>
    </div>
  );
}

export default CabeceraPokemon;
