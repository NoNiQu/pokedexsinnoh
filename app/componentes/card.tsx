//Dejo esto como comentario por si lo necestiamos en otro momento.
// interface cardProps {
//     id: number;
//     nombre: string;
//     faseEvolutiva: number;
//     legendario: boolean;
//     spriteMiniatura: string;
// }

import type { Pokemon } from "~/types/pokemon";

interface cardProps {
    pokemon: Pokemon;
}

function Card({pokemon}:cardProps) {
  return (
    <div className="flex items-center bg-amber-100 shadow-lg rounded-s-3xl rounded-e-md py-1 px-1">
        <div className="bg-red-500 rounded-4xl relative w-12 h-12 flex items-center justify-center">
            {/* <img src="" alt="" />   ESTO SERÁ LA IMAGEN DE LA POKEBALL, SEGÚN SU FASE EVOLUTIVA O SI ES LEGENDARIO */}
            <img src={pokemon.spriteMiniatura} alt="sprite" className="absolute top-0 start-0"/>
        </div>
        <p className="px-5 text-xl font-bold">{String(pokemon.id).padStart(3, "0")}</p>
        <p className="text-xl font-bold">{pokemon.nombre.toUpperCase()}</p>

    </div>
  )
}

export default Card