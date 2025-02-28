import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// import Card from "~/componentes/card";
import type { Pokemon } from "~/types/pokemon";
import ListPokemon from "~/componentes/ListPokemon";
import Imagen from "~/componentes/image";
import Header from "~/componentes/header";
import Footer from "~/componentes/footer";
import "./home.css"; // Importamos el CSS

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

  // Estado para almacenar el Pokémon seleccionado
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  // Actualiza selectedPokemon cuando los datos estén disponibles
  useEffect(() => {
    if (data.length > 0 && !selectedPokemon) {
      setSelectedPokemon(data[0]); // Usa el primer Pokémon al cargar los datos
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
      <Header titulo="POKéDEX SINNOH"></Header>

      <div className="container mx-auto p-4 flex gap-8 text-white">
        {/* Imagen del Pokémon seleccionado */}
        {selectedPokemon && (
          <Imagen
            imagen={selectedPokemon.spritePlatino}
            tipos={selectedPokemon.tipo}
          />
        )}
        
          <ListPokemon dataPokemon={data} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}></ListPokemon>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
