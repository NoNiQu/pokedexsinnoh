import ThemeToggle from "./themeToggle";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface HeaderProps {
  titulo: string;
  search?: boolean;
  theme?: "default" | "platinum" | "pearl"; // Definimos los temas disponibles
}

function Header({ titulo, search = false, theme = "default" }: HeaderProps) {
  return (
    <header className="flex justify-between items-center py-1 px-8 bg-sky-800 platinum:bg-amber-800 pearl:bg-pink-700">
      <div className="text-white rounded-4xl px-10 py-2">
        <h1 className="text-5xl font-bold">{titulo}</h1>
      </div>

      <div className="flex gap-4">
        <ThemeToggle />
        {search ? (
          <Link
            className="bg-green-400 hover:bg-green-500 text-white rounded-2xl px-6 py-2 text-3xl"
            to="/filtro"
          >
            SEARCH
          </Link>
        ) : (
          <Link
            className="bg-green-400 hover:bg-green-500 text-white rounded-2xl px-6 py-2 text-3xl"
            to="/"
          >
            CLOSE
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
