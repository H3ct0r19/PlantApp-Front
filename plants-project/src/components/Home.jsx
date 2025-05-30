const Home = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center h-screen bg-[#ecf9f3]">
                <h1 className="text-6xl font-bold mb-4 ">Welcome to PlantApp 🌵</h1>
                <p className="text-lg mb-8">Go online and give your plants the perfect care.</p>
                <a href="/plants" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300">
                    Connect
                </a>
            </section>
        </>
    )
}
export default Home;