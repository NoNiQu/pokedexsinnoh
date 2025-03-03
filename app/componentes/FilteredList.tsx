import FilteredListCard from "~/componentes/FilteredListCard"
import { useEffect, useState } from "react";
import type { Pokemon } from "~/types/pokemon";

interface FilteredListProps {
    data: Pokemon[]
}

function FilteredList({data}:FilteredListProps) {

    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            {data.map((pokemon) => (
                <FilteredListCard key={pokemon.id} pokemon={pokemon}></FilteredListCard>
            ))}
        </div>
    );
}

export default FilteredList