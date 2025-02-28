import ThemeToggle from "./themeToggle";

interface HeaderProps {
    titulo: string;
}

function Header({titulo}:HeaderProps) {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-amber-600">
        <div className="bg-red-500 text-white rounded-4xl px-10 py-2">
            <h1 className="text-3xl font-bold">{titulo}</h1>
        </div>
        <div>
            <ThemeToggle></ThemeToggle>
            {/* Botón para buscar, placeholder por ahora */}
            <button className="bg-pink-300 text-black rounded-3xl px-4 py-2 font-bold"> BUSCAR</button>
        </div>
    </header>
  )
}

export default Header