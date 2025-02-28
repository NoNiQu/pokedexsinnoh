import { useDarkMode } from "../hooks/useDarkMode";
function ThemeToggle() {
    const { theme, toggleTheme } = useDarkMode();
    
    return (
        // Falta darle estilo al botón, pero básicamente cambia el tema.
        <button onClick={toggleTheme} className="bg-sky-400 pearl:bg-pink-300 pearl:text-black platinum:bg-amber-500 rounded-3xl text-white px-4 py-2 font-bold">
            {theme === "diamond" ? (
                <p>DIAMANTE</p>
            ) : theme === "platinum" ? (
                <p>PLATINO</p>
            ) : (
                <p>PERLA</p>
            )}
        </button>
    )
}

export default ThemeToggle