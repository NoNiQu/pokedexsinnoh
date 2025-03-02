import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// import Card from "~/componentes/card";
import type { Pokemon } from "~/types/pokemon";
import ListPokemon from "~/componentes/ListPokemon";
import Imagen from "~/componentes/image";
import Header from "~/componentes/header";
import Footer from "~/componentes/footer";
import Tipos from "~/componentes/tipo";
import "./home.css";

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

      <div className="container mx-auto p-4 flex justify-between gap-8 text-white">
        <div className="flex flex-col gap-4 items-center justify-center flex-grow">
          {selectedPokemon && (
            <>
              <Imagen imagen={selectedPokemon.spritePlatino} />
              <Tipos tipos={selectedPokemon.tipo}></Tipos>
            </>
          )}
        </div>

        <ListPokemon
          dataPokemon={data}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
