import ThemeToggle from "./themeToggle";

interface HeaderProps {
  titulo: string;
}

function Header({ titulo }: HeaderProps) {
  return (
    <header className="flex justify-between items-center py-2 px-8 bg-sky-600 platinum:bg-amber-600 pearl:bg-pink-400">
      <div className="bg-red-500 text-white rounded-4xl px-10 py-2">
        <h1 className="text-3xl font-bold">{titulo}</h1>
      </div>
      <div className="flex gap-4">
        <ThemeToggle></ThemeToggle>
        {/* Botón para buscar, placeholder por ahora */}
        <button className="bg-pink-300 text-black rounded-3xl px-4 py-2 font-bold">
          BUSCAR
        </button>
      </div>
    </header>
  );
}

export default Header;
