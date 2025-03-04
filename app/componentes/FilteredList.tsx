import FilteredListCard from "~/componentes/FilteredListCard";
import type { Pokemon } from "~/types/pokemon";
type Theme = "diamond" | "pearl" | "platinum";

interface FilteredListProps {
  data: Pokemon[];
  theme: Theme;
}

function FilteredList({ data, theme }: FilteredListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((pokemon) => (
        <FilteredListCard key={pokemon.id} pokemon={pokemon} theme={theme}></FilteredListCard>
      ))}
    </div>
  );
}

export default FilteredList;
