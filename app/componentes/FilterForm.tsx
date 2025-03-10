import { useState } from "react";

interface FilterFormProps {
  onFilter: (filters: {
    name: string;
    type: string;
    sortBy: string;
    sortOrder: string;
  }) => void;
  onReset: () => void;
}

function FilterForm({ onFilter, onReset }: FilterFormProps) {
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

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-md">
      <input
        type="text"
        placeholder="NAME"
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
        <option value="elec">Electric</option>
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

      <div className="mt-2 flex gap-2 items-center">
        <label>
          <input
            type="radio"
            name="sortBy"
            value="altura"
            checked={sortBy === "altura"}
            onChange={() => {
              setSortBy("altura");
              if (sortOrder == "") {
                setSortOrder("asc");
              }
            }}
          />
          HEIGHT
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
                setSortOrder("asc");
              }
            }}
          />
          WEIGHT
        </label>
      </div>

      <div className="mt-2 flex gap-2 items-center">
        <label>
          <input
            type="radio"
            name="sortOrder"
            value="asc"
            checked={sortOrder === "asc"}
            onChange={() => setSortOrder("asc")}
          />
          ASC
        </label>
        <label>
          <input
            type="radio"
            name="sortOrder"
            value="desc"
            checked={sortOrder === "desc"}
            onChange={() => setSortOrder("desc")}
          />
          DESC
        </label>
      </div>

      <div className="mt-3">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-md cursor-pointer"
          >
            RESET
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-green-400 hover:bg-green-500 text-white p-2 rounded-md cursor-pointer mt-2"
        >
          SEARCH
        </button>
      </div>
    </form>
  );
}

export default FilterForm;
