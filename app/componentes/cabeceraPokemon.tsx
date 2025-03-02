import type { Pokemon } from "~/types/pokemon";
import PokeballImage from "~/componentes/PokeballImage";

interface CabeceraPokemonProps {
  pokemon: Pokemon;
}

function CabeceraPokemon({ pokemon }: CabeceraPokemonProps) {
  return (
    <div className="bg-amber-200 rounded-s-4xl py-5 px-12">
      <div className="flex w-full items-center">
        <PokeballImage
          legendario={pokemon.legendario}
          faseEvolutiva={pokemon.faseEvolutiva}
          spriteMiniatura={pokemon.spriteMiniatura}
        />
        <p className="px-5 text-5xl font-bold text-black">
          {String(pokemon.id).padStart(3, "0")}
        </p>
        <p className="text-5xl font-bold text-black mr-5">
          {pokemon.nombre.toUpperCase()}
        </p>
      </div>
      <p className="text-5xl font-bold text-black ml-30">
        {pokemon.tipoPokemon}
      </p>
    </div>
  );
}

export default CabeceraPokemon;
