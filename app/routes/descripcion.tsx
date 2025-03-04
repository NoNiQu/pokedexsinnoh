import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Imagen from "~/componentes/image";
import Header from "~/componentes/header";
import Footer from "~/componentes/footer";
import Tipos from "~/componentes/tipo";
import CabeceraPokemon from "~/componentes/cabeceraPokemon";
import StatsPokemon from "~/componentes/statsPokemon";
import DescripcionPokemon from "~/componentes/descripcionPokemon";

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
    <>
      <Header titulo="INFO"></Header>
      <div className="container mx-auto p-4 text-white pb-20 mt-20">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          {/* Imagen del Pokémon (solo columna en móviles) */}
          <div className="flex justify-center w-full md:w-auto">
            <Imagen imagen={selectedPokemon.spriteDiamantePerla} />
          </div>

          {/* Descripción y demás información del Pokémon */}
          <div className="flex flex-col justify-between gap-4 w-full md:w-4/7">
            <div>
              <CabeceraPokemon pokemon={selectedPokemon}></CabeceraPokemon>
              <div className="ms-2 mt-4">
                <Tipos tipos={selectedPokemon.tipo}></Tipos>
                <div className="mt-4">
                  <StatsPokemon pokemon={selectedPokemon}></StatsPokemon>
                </div>
              </div>
            </div>
            <DescripcionPokemon
              descripcion={selectedPokemon.descripcionDiamantePerla}
            ></DescripcionPokemon>
          </div>
        </div>

        {/* Contenedor de las flechas */}
        <div className="fixed bottom-0 left-0 right-0 flex justify-between px-4 py-4 md:static md:mt-6">
          <div className="w-full flex justify-between">
            {/* Flecha izquierda: Solo mostrar si el ID es mayor que 1 */}
            <Link
              to={`/descripcion/${selectedPokemon.id - 1}`}
              className={`flex justify-start w-auto ${
                selectedPokemon.id === 1 ? "hidden" : ""
              }`}
            >
              <img
                src="/public/arrow-left-solid.svg"
                alt="Left Arrow"
                className="w-12 h-12 cursor-pointer opacity-70"
              />
            </Link>

            {/* Flecha derecha: Solo mostrar si el ID es menor que 107 */}
            <Link
              to={`/descripcion/${selectedPokemon.id + 1}`}
              className={`flex justify-end w-auto ${
                selectedPokemon.id === 107 ? "hidden" : ""
              }`}
            >
              <img
                src="/public/arrow-right-solid.svg"
                alt="Right Arrow"
                className="w-12 h-12 cursor-pointer opacity-70"
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Descripcion;
