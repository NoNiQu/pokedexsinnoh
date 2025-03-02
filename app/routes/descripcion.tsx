import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Imagen from "~/componentes/image";
import type { Pokemon } from "~/types/pokemon";

const fetchPokemonById = async (id: string) => {
  const res = await fetch(`http://localhost:8080/api/pokedex_sinnoh/${id}`);
  if (!res.ok) throw new Error("No se pudo obtener el Pokémon");
  return res.json();
};

const Descripcion = () => {
  const { id } = useParams(); // Obtiene el ID de la URL

  const {
    data: selectedPokemon,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemon", id], // La clave incluye el ID para hacer fetch por cada Pokémon único
    queryFn: () => fetchPokemonById(id as string), // Convierte id a string seguro
    enabled: !!id, // Solo hace la consulta si hay un ID válido
  });

  if (isLoading)
    return <div className="text-center mt-10 text-white">Cargando...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error al cargar el Pokémon
      </div>
    );
  if (!selectedPokemon)
    return (
      <div className="text-center mt-10 text-white">Pokémon no encontrado</div>
    );

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-5xl font-bold mb-4">
        {selectedPokemon.nombre.toUpperCase()}
      </h1>
      <Imagen imagen={selectedPokemon.spritePlatino} />
      <p className="mt-4 text-lg">ID: {selectedPokemon.id}</p>
      <p className="text-lg">
        Tipo:{" "}
        {Array.isArray(selectedPokemon.tipo)
          ? selectedPokemon.tipo.join(", ")
          : selectedPokemon.tipo || "Desconocido"}
      </p>
      <p className="text-lg">Evolución: {selectedPokemon.faseEvolutiva}</p>
      <p className="text-lg">
        Legendario: {selectedPokemon.legendario ? "Sí" : "No"}
      </p>
    </div>
  );
};

export default Descripcion;
