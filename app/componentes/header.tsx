import ThemeToggle from "./themeToggle";
import { Link } from "react-router";

interface HeaderProps {
  titulo: string;
  search?: boolean;
}

function Header({ titulo, search=false }: HeaderProps) {
  return (
    <header className="flex justify-between items-center py-2 px-8 bg-sky-600 platinum:bg-amber-600 pearl:bg-pink-400">
      <div className="bg-red-500 text-white rounded-4xl px-10 py-2">
        <h1 className="text-3xl font-bold">{titulo}</h1>
      </div>
      <div className="flex gap-4">
        <ThemeToggle></ThemeToggle>
        {/* Botón para buscar, placeholder por ahora */}
        {/* Un if - else, || es la parte del else */}
        {search && 
          <button className="bg-pink-300 text-black rounded-3xl px-4 py-2 font-bold">
            BUSCAR
          </button>
        ||
          // Básicamente un botón para volver a la página home, falta darle formato.
          <Link className="bg-pink-300 text-black rounded-3xl px-4 py-2 font-bold" to={'../'}>
            VOLVER
          </Link>
        }
      </div>
    </header>
  );
}

export default Header;
