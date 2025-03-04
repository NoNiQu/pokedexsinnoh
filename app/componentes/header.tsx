import ThemeToggle from "./themeToggle";
import { Link } from "react-router-dom";

type Theme = "diamond" | "pearl" | "platinum";

interface HeaderProps {
  titulo: string;
  search?: boolean;
  theme?: Theme;
  setTheme: () => void
}

function Header({ titulo, search = false, theme = "diamond", setTheme }: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-2 px-8 bg-sky-800 platinum:bg-amber-800 pearl:bg-pink-700">
      <div className="text-white text-center md:text-left rounded-4xl px-6 py-2">
        <h1 className="text-3xl md:text-5xl font-bold">{titulo}</h1>
      </div>

      <div className="flex w-full md:w-auto justify-between md:justify-end gap-4 mt-4 md:mt-0">
        <ThemeToggle theme={theme} toggleTheme={setTheme}/>
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
