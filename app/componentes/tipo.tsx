interface TipoProps {
    tipos?: string;
}

function Tipos({tipos = ""}:TipoProps) {
    const types: Record<string, string> = {
        normal: "bg-gray-500 text-white",
        fire: "bg-red-500 text-white",
        water: "bg-blue-500 text-white",
        grass: "bg-green-500 text-white",
        elec: "bg-yellow-500 text-white",
        ice: "bg-blue-200",
        fighting: "bg-red-700 text-white",
        poison: "bg-purple-500 text-white",
        ground: "bg-yellow-700 text-white",
        flying: "bg-blue-300",
        psychic: "bg-purple-700 text-white",
        bug: "bg-green-400 text-white",
        rock: "bg-yellow-800 text-white",
        ghost: "bg-indigo-500 text-white",
        dark: "bg-gray-800 text-white",
        dragon: "bg-blue-800 text-white",
        steel: "bg-gray-400",
      };

      const tiposArray = tipos.split(",");
  return (
    <div className="flex gap-8">
        {tiposArray.map((tipo) => (
            <div 
                key={tipo.trim()}
                className={`rounded-md px-4 py-2 text-2xl font-bold ${types[tipo.trim()]}`}
                >
                {tipo.trim().toUpperCase()}
            </div>
        ))}
    </div>
  )
}

export default Tipos