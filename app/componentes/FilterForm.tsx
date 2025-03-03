import { useState } from "react";

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

// Componente para el formulario de filtros
function FilterForm({ onFilter, onReset, onShowAll }: FilterFormProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Función que ocurre en lugar de enviarse el formulario.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter({ name, type, sortBy, sortOrder });
  };

  // Función para resetear el formulario (resetear los estados).
  const handleReset = () => {
    setName("");
    setType("");
    setSortBy("");
    setSortOrder("");
    onReset();
  };

  // Función para mostrar todos los Pokémon (resetear estados y mostrar todo).
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
        <option value="">Select Type / All</option>
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
            onChange={() => {
              setSortBy("altura");
              if (sortOrder == "") {
                // Si no hay ningún orden seleccionado, se selecciona automáticamente ASC.
                setSortOrder("asc");
              }
            }}
          />
          Altura
        </label>
        <label>
          <input
            type="radio"
            name="sortBy"
            value="peso"
            checked={sortBy === "peso"}
            onChange={() => {
              setSortBy("peso");
              if (sortOrder == "") {
                // Si no hay ningún orden seleccionado, se selecciona automáticamente ASC.
                setSortOrder("asc");
              }
            }}
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
          className="w-full bg-blue-500 text-white p-2 rounded-md cursor-pointer"
        >
          Filtrar
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="w-full bg-gray-500 text-white p-2 rounded-md cursor-pointer"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handleShowAll}
          className="w-full bg-green-500 text-white p-2 rounded-md cursor-pointer"
        >
          Mostrar Todo
        </button>
      </div>
    </form>
  );
}

export default FilterForm;
