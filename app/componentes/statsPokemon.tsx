import type { Pokemon } from "~/types/pokemon";

interface StatsPokemonProps {
  pokemon: Pokemon;
}

function StatsPokemon({ pokemon }: StatsPokemonProps) {
  return (
    <div className="flex text-5xl text-black">
      <div className="w-full text-center md:text-left">
        <p>Height: {pokemon.altura}</p>
        <p>Weight: {pokemon.peso}</p>
      </div>
    </div>
  );
}

export default StatsPokemon;
