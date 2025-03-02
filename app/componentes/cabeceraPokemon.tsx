import type { Pokemon } from "~/types/pokemon";
import PokeballImage from "~/componentes/PokeballImage";

interface CabeceraPokemonProps {
  pokemon: Pokemon;
}

function CabeceraPokemon({ pokemon }: CabeceraPokemonProps) {
  return (
    <div className="bg-amber-200 rounded-4xl py-5 px-12 text-5xl font-bold text-black">
      <div className="flex w-full items-center justify-between gap-6">
        <p className="px-5">
          {String(pokemon.id).padStart(3, "0")} {pokemon.nombre.toUpperCase()}
        </p>
        <p>
          {pokemon.tipoPokemon}
        </p>
      </div>
      
    </div>
  );
}

export default CabeceraPokemon;
