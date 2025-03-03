import type { Pokemon } from "~/types/pokemon";
import { Link } from "react-router-dom";

interface FilteredListCardProps {
  pokemon: Pokemon;
}

function FilteredListCard({ pokemon }: FilteredListCardProps) {
  return (
    <Link to={`/descripcion/${pokemon.id}`}>
      <div key={pokemon.id} className="p-2 bg-white shadow rounded-md">
        <img
          src={pokemon.spriteDiamantePerla}
          alt={pokemon.nombre}
          className="w-full h-32 object-contain"
        />
        <h3 className="text-xl text-center mt-3">
          {pokemon.nombre.toUpperCase()}
        </h3>
      </div>
    </Link>
  );
}

export default FilteredListCard;
