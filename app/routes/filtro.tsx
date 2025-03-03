import FilteredList from "~/componentes/FilteredList";
import FilterForm from "~/componentes/FilterForm";
import type { Pokemon } from "~/types/pokemon";
import { useState, useEffect } from "react";

const Filtro = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/pokedex_sinnoh")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
        setFilteredPokemons(data);
      })
      .catch((error) => console.error("Error fetching Pokémon:", error));
    }, []);

  // Función para extraer un número de un string.
  const extractNumber = (value: string): number =>
    parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  
  // Función para gestionar el filtrado.
  const handleFilter = ({
    name,
    type,
    sortBy,
    sortOrder,
  }:  {
    name: string;
    type: string;
    sortBy: string;
    sortOrder: string;
  }) => {
    let filtered = [...pokemons];
  
    if (name) {
      filtered = filtered.filter((pokemon) =>
        pokemon.nombre.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (type) {
      filtered = filtered.filter((pokemon) => pokemon.tipo.includes(type));
    }
  
    if (sortBy && sortOrder) {
      filtered.sort((a, b) => {
        const valueA = extractNumber(String(a[sortBy as keyof Pokemon]));
        const valueB = extractNumber(String(b[sortBy as keyof Pokemon]));
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      });
    }
    setFilteredPokemons(filtered);
  };

  // Función para gestionar el reseteo del filtro.
  const handleReset = () => {
    setFilteredPokemons(pokemons);
  };
  
  // Función para mostrar todos los Pokémon.
  const handleShowAll = () => {
      setFilteredPokemons(pokemons);
  };

  return (
    <div className="container mx-auto p-4">
      <FilterForm
        onFilter={handleFilter}
        onReset={handleReset}
        onShowAll={handleShowAll}
      />

      <FilteredList data={filteredPokemons}></FilteredList>
    </div>
  )
};

export default Filtro;