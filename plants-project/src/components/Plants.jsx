import { useEffect, useState } from 'react';
import { ErrorNotFound } from '../components';
import { PlantCard } from "../components";
import AddPlantForm from './AddPlantForm';

const Plants = () => {
    const [plants, setPlants] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch('https://plantapp-back.onrender.com/api/plants')
            .then(res => {
                if (!res.ok) throw new Error('Error fetching plants');
                return res.json();
            })
            .then(data => setPlants(data))
            .catch(err => {
                console.error('Fetch error:', err);
                setHasError(true);
            });
    }, []);

    const handleAddPlant = (newPlant) => {
        setPlants(prev => [...prev, newPlant]);
        setShowForm(false); 
    };

    if (hasError) return <ErrorNotFound />;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl text-center mb-8">Plants Hub</h1>

            <div className="text-center mb-6">
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                >
                    + Add New Plant
                </button>
            </div>

            {showForm && (
                <AddPlantForm onClose={() => setShowForm(false)} onAdd={handleAddPlant} />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {plants.map(plant => (
                    <PlantCard key={plant.id} plant={plant} />
                ))}
            </div>
        </div>
    );
};

export default Plants;
