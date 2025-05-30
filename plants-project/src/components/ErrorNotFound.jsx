const ErrorNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="mt-4 text-xl text-gray-700">Página no encontrada</p>
            <p className="mt-2 text-gray-500">Lo sentimos, la página que buscas no existe o no se pudo cargar.</p>
            <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Volver al inicio</a>
        </div>
    )
}

export default ErrorNotFound;