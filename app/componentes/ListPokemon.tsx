import Card from "~/componentes/card";
import type { Pokemon } from "~/types/pokemon";

interface ListPokemonProps {
    dataPokemon: Pokemon[];
    selectedPokemon: Pokemon | null;
    setSelectedPokemon: (pokemon: Pokemon) => void;
}

function ListPokemon({dataPokemon, selectedPokemon, setSelectedPokemon}:ListPokemonProps) {
  return (
    <div className="pokemon-list custom-scrollbar flex flex-col gap-4">
        {dataPokemon.map((pokemon: Pokemon) => (
            <div key={pokemon.id} onClick={() => setSelectedPokemon(pokemon)}>
                <Card
                    pokemon={pokemon}
                    isSelected={pokemon.id === selectedPokemon?.id}
                />
            </div>
        ))}
    </div>
  )
}

export default ListPokemon