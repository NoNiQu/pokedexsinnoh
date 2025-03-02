// import { p } from "node_modules/@react-router/dev/dist/routes-DHIOx0R9";
import type { Pokemon } from "~/types/pokemon";

interface StatsPokemonProps {
    pokemon: Pokemon
}

function StatsPokemon({pokemon}:StatsPokemonProps) {
    return (
        <div className="flex text-5xl text-black w-xl">
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