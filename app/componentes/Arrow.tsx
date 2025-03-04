import { Link } from "react-router-dom";
import type { Pokemon } from "~/types/pokemon";

interface ArrowProps {
    pokemon: Pokemon,
    isNextPokemon: boolean
}

function Arrow({pokemon, isNextPokemon}:ArrowProps) {
  return (
    <Link
        to={`/descripcion/${isNextPokemon? pokemon.id + 1 : pokemon.id - 1}`}
        className={`flex justify-start w-auto ${
            ((pokemon.id === 1 && !isNextPokemon) || (pokemon.id === 107 && isNextPokemon)) ? "invisible" : ""
        }`}
    >
        <img
            src={`${isNextPokemon? "/public/arrow-right-solid.svg" : "/public/arrow-left-solid.svg"}`}
            alt="Arrow"
            className="w-12 h-12 cursor-pointer opacity-70"
        />
    </Link>

  )
}

export default Arrow