import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "~/componentes/card";
import type { Pokemon } from "~/types/pokemon";
import Imagen from "~/componentes/image";
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

  // Subimos al estado el Pokémon seleccionado entero.
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(data[0]);
  // useEffect(() => {
  //   if (data.length > 0 && selectedPokemon === null) {
  //     setSelectedPokemon(data[0].id);
  //   }
  // }, [data, selectedPokemon]);

  if (isLoading)
    return <div className="text-center mt-10 text-white">Cargando...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error al cargar los datos
      </div>
    );

  return (
    <div className="container mx-auto p-4 flex gap-8 text-white">
      {/* Imagen del Pokémon seleccionado */}
      {/* <div className="flex flex-col gap-4 items-center justify-center flex-grow">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon}.png`}
          alt="Pokemon"
          className="w-96 h-96 bg-white border-4 border-red-500"
        />
      </div> */}
      <Imagen
        imagen={selectedPokemon?.spritePlatino}
        tipos={selectedPokemon?.tipo}
      ></Imagen>

      {/* Lista de Pokémon con scroll personalizado */}
      <div className="pokemon-list custom-scrollbar flex flex-col gap-4">
        {data.map((pokemon: Pokemon) => (
          <div key={pokemon.id} onClick={() => setSelectedPokemon(pokemon)}>
            <Card
              pokemon={pokemon}
              isSelected={pokemon.id === selectedPokemon?.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
