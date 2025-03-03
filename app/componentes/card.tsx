import type { Pokemon } from "~/types/pokemon";
import PokeballImage from "~/componentes/PokeballImage";
import { Link } from "react-router-dom";

interface CardProps {
  pokemon: Pokemon;
  isSelected: boolean;
}

function Card({ pokemon, isSelected }: CardProps) {
  return (
    <div
      className={`flex items-center shadow-lg rounded-5xl rounded-md py-5 px-12 w-full ${
        isSelected ? "bg-amber-200" : "bg-amber-100"
      }`}
      style={{ width: "650px", fontSize: "1.5rem" }}
    >
      <div className="flex items-center w-full">
        <PokeballImage
          legendario={pokemon.legendario}
          faseEvolutiva={pokemon.faseEvolutiva}
          spriteMiniatura={pokemon.spriteMiniatura}
        />
        <p className="px-5 text-5xl font-bold  text-black">
          {String(pokemon.id).padStart(3, "0")}
        </p>
        <p className="text-5xl font-bold text-black mr-5">
          {pokemon.nombre.toUpperCase()}
        </p>
        {isSelected && (
          <Link
            to={`/descripcion/${pokemon.id}`}
            className="bg-amber-600 text-white px-4 py-2 rounded-md ml-auto"
          >
            INFO
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
