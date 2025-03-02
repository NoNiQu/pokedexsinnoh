import type { Pokemon } from "~/types/pokemon";

interface StatsPokemonProps {
    pokemon: Pokemon
}

function StatsPokemon({pokemon}:StatsPokemonProps) {
    return (
        <div className="flex gap-10 text-5xl text-black w-fit">
            <div className="w-1/2">
                <p>Height</p>
                <p>Weight</p>
            </div>
            <div className="w-1/2">
                <p className="text-center">{pokemon.altura}</p>
                <p className="text-center">{pokemon.peso}</p>
            </div>
        </div>
    )
}

export default StatsPokemon