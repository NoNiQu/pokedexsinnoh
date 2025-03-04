import FilteredList from "~/componentes/FilteredList";
import FilterForm from "~/componentes/FilterForm";
import type { Pokemon } from "~/types/pokemon";
import Header from "~/componentes/header";
import Footer from "~/componentes/footer";
import { useState, useEffect } from "react";
import "./global.css";
import { useDarkMode } from "~/hooks/useDarkMode";

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


  // Recupero el tema que se esté usando en useDarkMode y lo subo a un estado.
  // Básicamente separo el tema que se va a aplicar a los estilos, del tema que se va a aplicar a la imagen y descripción.
  const tema = useDarkMode();
  const [theme, setTheme] = useState(tema.theme);

  const cambiarTema = () => {
    setTheme((prev) =>
      prev === "diamond" ? "pearl" : prev === "pearl" ? "platinum" : "diamond"
    );
    // Aunque cambie el tema en esta página, tengo que decirle que cambie en el estilo.
    tema.toggleTheme()
  };


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
      <Header titulo="FILTER" theme={theme} setTheme={cambiarTema}></Header>

      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
        {/* Formulario de filtro (columna en móviles, fila en pantallas grandes) */}
        <div className="w-full md:w-1/4 p-4 rounded-lg">
          <FilterForm onFilter={handleFilter} onReset={handleReset} />
        </div>

        {/* Lista de Pokémon (columna en móviles, fila en pantallas grandes) */}
        <div className="w-full md:w-3/4 max-h-[700px] overflow-y-auto bg-sky-800 platinum:bg-amber-800 pearl:bg-pink-700 p-4 rounded-md custom-scrollbar">
          <FilteredList data={filteredPokemons} theme={theme}/>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Filtro;
