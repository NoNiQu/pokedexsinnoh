import { useQuery } from "@tanstack/react-query";

interface ImagenProps {
    imagen?: string
    tipos?: string
}

function Imagen({imagen, tipos = ''}:ImagenProps) {
  const types:Record<string, string> = {
    "normal": "bg-gray-500 text-white",
    "fire": "bg-red-500 text-white",
    "water": "bg-blue-500 text-white",
    "grass": "bg-green-500 text-white",
    "elec": "bg-yellow-500 text-white",
    "ice": "bg-blue-200",
    "fighting": "bg-red-700 text-white",
    "poison": "bg-purple-500 text-white",
    "ground": "bg-yellow-700 text-white",
    "flying": "bg-blue-300",
    "psychic": "bg-purple-700 text-white",
    "bug": "bg-green-400 text-white",
    "rock": "bg-yellow-800 text-white",
    "ghost": "bg-indigo-500 text-white",
    "dark": "bg-gray-800 text-white",
    "dragon": "bg-blue-800 text-white",
    "steel": "bg-gray-400",
  }
  
  const fetchFirstPokemon = async () => {
    const res = await fetch("http://localhost:8080/api/pokedex_sinnoh/1");
    return res.json();
  };

  const {
    data = [],
  } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchFirstPokemon,
  });

  if (imagen === undefined) {
    console.log(data[0]);
    imagen = data[0].spritePlatino;
    tipos = data[0].tipo;
  }


  const tiposArray = tipos.split(',');

  console.log("Imagen: " + imagen);

  return (
    <div className="flex flex-col gap-4 items-center justify-center flex-grow">
        <img
          src={imagen}
          alt="Pokemon"
          className="w-96 h-96 bg-white border-4 border-red-500"
        />
        <div className="flex gap-4">
            {tiposArray.map((tipo) => (
                <div key={tipo.trim()} className={`rounded-md px-2 py-1 ${types[tipo.trim()]}`}>{tipo.trim()}</div>
            ))}
        </div>
      </div>
  )
}

export default Imagen