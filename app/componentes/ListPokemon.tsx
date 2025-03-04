import Card from "~/componentes/card";
import type { Pokemon } from "~/types/pokemon";

interface ListPokemonProps {
  dataPokemon: Pokemon[];
  selectedPokemon: Pokemon | null;
  setSelectedPokemon: (pokemon: Pokemon) => void;
}

function ListPokemon({
  dataPokemon,
  selectedPokemon,
  setSelectedPokemon,
}: ListPokemonProps) {
  return (
    <div className="pokemon-list custom-scrollbar flex flex-col gap-4 max-h-[750px] w-full md:w-[700px] mx-auto overflow-y-auto bg-sky-800 platinum:bg-amber-800 pearl:bg-pink-700 p-4 rounded-md cursor-pointer">
      {dataPokemon.map((pokemon: Pokemon) => (
        <div key={pokemon.id} onClick={() => setSelectedPokemon(pokemon)}>
          <Card
            pokemon={pokemon}
            isSelected={pokemon.id === selectedPokemon?.id}
          />
        </div>
      ))}
    </div>
  );
}

export default ListPokemon;
