import { useState, useEffect } from "react";

// Componente para el formulario de filtros
interface FilterFormProps {
  onFilter: (filters: {
    name: string;
    type: string;
    sortBy: string;
    sortOrder: string;
  }) => void;
  onReset: () => void;
  onShowAll: () => void;
}

function FilterForm({ onFilter, onReset, onShowAll }: FilterFormProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter({ name, type, sortBy, sortOrder });
  };

  const handleReset = () => {
    setName("");
    setType("");
    setSortBy("");
    setSortOrder("");
    onReset();
  };

  const handleShowAll = () => {
    setName("");
    setType("");
    setSortBy("");
    setSortOrder("");
    onShowAll();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-md">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-2 border rounded-md mt-2"
      >
        <option value="">Any</option>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="steel">Steel</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="psychic">Psychic</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dragon">Dragon</option>
      </select>

      <div className="mt-2 flex gap-2">
        <label>
          <input
            type="radio"
            name="sortBy"
            value="altura"
            checked={sortBy === "altura"}
            onChange={() => setSortBy("altura")}
          />
          Altura
        </label>
        <label>
          <input
            type="radio"
            name="sortBy"
            value="peso"
            checked={sortBy === "peso"}
            onChange={() => setSortBy("peso")}
          />
          Peso
        </label>
      </div>

      <div className="mt-2 flex gap-2">
        <label>
          <input
            type="radio"
            name="sortOrder"
            value="asc"
            checked={sortOrder === "asc"}
            onChange={() => setSortOrder("asc")}
          />
          Ascendente
        </label>
        <label>
          <input
            type="radio"
            name="sortOrder"
            value="desc"
            checked={sortOrder === "desc"}
            onChange={() => setSortOrder("desc")}
          />
          Descendente
        </label>
      </div>

      <div className="flex gap-2 mt-2">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Filtrar
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="w-full bg-gray-500 text-white p-2 rounded-md"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handleShowAll}
          className="w-full bg-green-500 text-white p-2 rounded-md"
        >
          Mostrar Todo
        </button>
      </div>
    </form>
  );
}

// Componente para mostrar la lista de Pokémon
function PokemonList() {
  interface Pokemon {
    id: number;
    nombre: string;
    tipo: string[];
    altura: string;
    peso: string;
    spriteDiamantePerla: string;
  }

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/pokedex_sinnoh")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
        setFilteredPokemons(data);
      })
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, []);

  const extractNumber = (value: string): number =>
    parseFloat(value.replace(/[^0-9.]/g, "")) || 0;

  const handleFilter = ({
    name,
    type,
    sortBy,
    sortOrder,
  }: {
    name: string;
    type: string;
    sortBy: string;
    sortOrder: string;
  }) => {
    let filtered = [...pokemons];

    if (name) {
      filtered = filtered.filter((pokemon) =>
        pokemon.nombre.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (type) {
      filtered = filtered.filter((pokemon) => pokemon.tipo.includes(type));
    }

    if (sortBy && sortOrder) {
      filtered.sort((a, b) => {
        const valueA = extractNumber(String(a[sortBy as keyof Pokemon]));
        const valueB = extractNumber(String(b[sortBy as keyof Pokemon]));
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      });
    }

    setFilteredPokemons(filtered);
  };

  const handleReset = () => {
    setFilteredPokemons(pokemons);
  };

  const handleShowAll = () => {
    setFilteredPokemons(pokemons);
  };

  return (
    <div className="container mx-auto p-4">
      <FilterForm
        onFilter={handleFilter}
        onReset={handleReset}
        onShowAll={handleShowAll}
      />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {filteredPokemons.map((pokemon) => (
          <div key={pokemon.id} className="p-4 bg-white shadow rounded-md">
            <img
              src={pokemon.spriteDiamantePerla}
              alt={pokemon.nombre}
              className="w-full h-32 object-contain"
            />
            <h3 className="text-xltext-center">
              {pokemon.nombre.toUpperCase()}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
