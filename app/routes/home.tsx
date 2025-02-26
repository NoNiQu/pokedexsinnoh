import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "~/componentes/card";
import type { Pokemon } from "~/types/pokemon";

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

  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
  const pokemonVersion = "dp";

  useEffect(() => {
    if (data.length > 0 && selectedPokemon === null) {
      setSelectedPokemon(data[0].id);
    }
  }, [data, selectedPokemon]);

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
      <div className="flex flex-col gap-4">
        {data.map((pokemon: Pokemon) => (
          <div
            key={pokemon.id}
            onClick={() => setSelectedPokemon(pokemon.id)}
            className="cursor-pointer"
          >
            <Card
              pokemon={pokemon}
              isSelected={pokemon.id === selectedPokemon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
