interface ThemeToggleProps {
  theme: string,
  toggleTheme: () => void
}

function ThemeToggle({theme, toggleTheme} : ThemeToggleProps) {
  // const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="bg-sky-500 hover:bg-sky-600 pearl:bg-pink-300 pearl:text-black pearl:hover:bg-pink-400 platinum:bg-amber-500 platinum:hover:bg-amber-600 rounded-2xl text-white px-6 py-2 text-3xl cursor-pointer"
    >
      {theme === "diamond" ? (
        <p>DIAMOND</p>
      ) : theme === "platinum" ? (
        <p>PLATINUM</p>
      ) : (
        <p>PEARL</p>
      )}
    </button>
  );
}

export default ThemeToggle;
