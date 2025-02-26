import { useQuery } from "@tanstack/react-query";

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

  if (isLoading) return <div className="text-center mt-10">Cargando...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error al cargar los datos
      </div>
    );

  if (!Array.isArray(data) || data.length === 0)
    return (
      <div className="text-center mt-10 text-gray-500">
        No hay datos disponibles
      </div>
    );

  return (
    <div className="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((pokemon) => (
        <div
          key={pokemon.id}
          className="bg-white shadow-lg rounded-lg p-4 flex items-center"
        >
          <div
            className={`w-24 h-24 flex items-center justify-center rounded-lg ${
              pokemon.legendario
                ? "bg-purple-500"
                : pokemon.faseEvolutiva === 1
                ? "bg-red-500"
                : pokemon.faseEvolutiva === 2
                ? "bg-blue-500"
                : "bg-black"
            }`}
          >
            <img
              src={pokemon.spriteMiniatura}
              alt={pokemon.nombre}
              className="w-16 h-16"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold text-black">
              {String(pokemon.id).padStart(3, "0")}{" "}
              {pokemon.nombre.toUpperCase()}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
