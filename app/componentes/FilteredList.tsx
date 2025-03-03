import FilteredListCard from "~/componentes/FilteredListCard";
import type { Pokemon } from "~/types/pokemon";

interface FilteredListProps {
  data: Pokemon[];
}

function FilteredList({ data }: FilteredListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((pokemon) => (
        <FilteredListCard key={pokemon.id} pokemon={pokemon}></FilteredListCard>
      ))}
    </div>
  );
}

export default FilteredList;
