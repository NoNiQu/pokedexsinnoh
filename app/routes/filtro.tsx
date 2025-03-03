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
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/pokedex_sinnoh")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
        setFilteredPokemons([]); // Lista vacía al inicio
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
    setIsListVisible(filtered.length > 0);
  };

  const handleReset = () => {
    setFilteredPokemons([]);
    setIsListVisible(false);
  };

  const handleShowAll = () => {
    if (pokemons.length > 0) {
      setFilteredPokemons(pokemons);
      setIsListVisible(true);
    }
  };

  return (
    <>
      <Header titulo="FILTRER"></Header>
      <div className="container mx-auto p-4 flex gap-8">
        {/* Formulario de filtros SIEMPRE visible */}
        <div className="w-1/4 p-4  rounded-lg">
          <FilterForm
            onFilter={handleFilter}
            onReset={handleReset}
            onShowAll={handleShowAll}
          />
        </div>

        {/* Contenedor de la lista (invisible hasta que se filtre o se muestre todo) */}
        {isListVisible ? (
          <div className="w-3/4 max-h-[750px] overflow-y-auto bg-amber-400 p-4 rounded-md custom-scrollbar">
            <FilteredList data={filteredPokemons} />
          </div>
        ) : (
          <p className="text-center text-gray-700 mt-4">
            Filtra o muestra todo para ver los Pokémon.
          </p>
        )}
      </div>

      <Footer></Footer>
    </>
  );
};

export default Filtro;
