import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Pokemon } from "~/types/pokemon";
import ListPokemon from "~/componentes/ListPokemon";
import Imagen from "~/componentes/image";
import Header from "~/componentes/header";
import Footer from "~/componentes/footer";
import Tipos from "~/componentes/tipo";
import "./global.css";
import { useDarkMode } from "~/hooks/useDarkMode";

const fetchPokemon = async () => {
  const res = await fetch("http://localhost:8080/api/pokedex_sinnoh");
  return res.json();
};

const Home = () => {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
  });

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);










  const tema = useDarkMode();
  const [theme, setTheme] = useState(tema.theme);

  useEffect(() => {   // Si cambia el Theme, hay que cambiar el Sprite y la Descripción del Pokémon.
    if (theme == "platinum") {
      console.log ("Platino")
    } else {
      console.log ("Diamante Perla")
    }
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "diamond" ? "pearl" : prev === "pearl" ? "platinum" : "diamond"
    );
    tema.toggleTheme();
  };













  useEffect(() => {
    if (data.length > 0 && !selectedPokemon) {
      setSelectedPokemon(data[0]);
    }
  }, [data]);

  if (isLoading)
    return <div className="text-center mt-10 text-white">Cargando...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error al cargar los datos
      </div>
    );

  return (
    <>
      <Header titulo="POKéDEX SINNOH" search={true} theme={theme} setTheme={toggleTheme}/>

      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between gap-8 text-white pb-20">
        {/* Oculta en móviles y muestra en pantallas medianas o más grandes */}
        <div className="hidden md:flex flex-col gap-4 items-center justify-center flex-grow">
          {selectedPokemon && (
            <>
              <Imagen key={selectedPokemon.id} imagen={`${theme == "platinum" ? selectedPokemon.spritePlatino : selectedPokemon.spriteDiamantePerla }`} />
              <Tipos tipos={selectedPokemon.tipo} />
            </>
          )}
        </div>

        {/* La lista de Pokémon siempre visible */}
        <ListPokemon
          dataPokemon={data}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      </div>

      <Footer />
    </>
  );
};

export default Home;
