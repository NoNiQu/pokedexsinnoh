import FilteredList from "~/componentes/FilteredList";
import FilterForm from "~/componentes/FilterForm";
import type { Pokemon } from "~/types/pokemon";
import Header from "~/componentes/header";
import Footer from "~/componentes/footer";
import { useState, useEffect } from "react";
import "./global.css";

const Filtro = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/pokedex_sinnoh")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
        setFilteredPokemons(data); // Mostrar todos los Pokémon al inicio
      })
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, []);

  const handleFilter = ({
    name,
    type,
    sortBy,
    sortOrder,
  }: {
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
        const valueA = parseFloat(String(a[sortBy as keyof Pokemon])) || 0;
        const valueB = parseFloat(String(b[sortBy as keyof Pokemon])) || 0;
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      });
    }

    setFilteredPokemons(filtered);
  };

  const handleReset = () => {
    setFilteredPokemons(pokemons); // Restablecer a la lista completa
  };

  return (
    <>
      <Header titulo="FILTER"></Header>
      <div className="container mx-auto p-4 flex gap-8">
        <div className="w-1/4 p-4 rounded-lg">
          <FilterForm onFilter={handleFilter} onReset={handleReset} />
        </div>

        <div className="w-3/4 max-h-[700px] overflow-y-auto bg-sky-800 platinum:bg-amber-800 pearl:bg-pink-700 p-4 rounded-md custom-scrollbar">
          <FilteredList data={filteredPokemons} />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Filtro;
