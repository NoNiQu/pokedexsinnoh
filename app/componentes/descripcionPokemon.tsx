interface DescripcionPokemonProps {
    descripcion: string;
}

function DescripcionPokemon({descripcion}:DescripcionPokemonProps) {
    return (
        <div className="flex justify-between bg-blue-400 p-6 gap-6 rounded-3xl border-4 border-blue-700 w-fit">
            {/* Cuadrado azul */}
            <div className="px-10 bg-blue-700 rounded-2xl"></div>
            <div className="px-10 py-4 bg-white rounded-2xl border-4 border-gray-600">
                <p className="text-5xl font-bold text-black">
                    {descripcion}
                </p>
            </div>
            {/* Cuadrado azul */}
            <div className="px-10 bg-blue-700 rounded-2xl"></div>
        </div>
    )
}

export default DescripcionPokemon