import type { Pokemon } from "~/types/pokemon"

interface FilteredListCardProps {
    pokemon: Pokemon
}

function FilteredListCard({pokemon}:FilteredListCardProps) {
    return (
        <div key={pokemon.id} className="p-4 bg-white shadow rounded-md">
            <img
                src={pokemon.spriteDiamantePerla}
                alt={pokemon.nombre}
                className="w-full h-32 object-contain"
            />
            <h3 className="text-xltext-center">
                {pokemon.nombre.toUpperCase()}
            </h3>
        </div>
    )
}

export default FilteredListCard