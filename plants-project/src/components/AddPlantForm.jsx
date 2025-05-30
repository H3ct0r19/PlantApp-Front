import {useState} from 'react'
const AddPlantForm = ({ onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        imageURL: '',
        commonName: '',
        scientificName: '',
        description: '',
        lightRequirement: '',
        wateringFrequency: '',
        humidityPercentage: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://plantapp-back.onrender.com/api/plants', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error('Failed to add plant');
            const newPlant = await res.json();
            onAdd(newPlant);
        } catch (err) {
            console.error('Submit error:', err);
            alert('Error adding plant');
        }
    };

    return (
        <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Add New Plant</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                    type="text"
                    name="commonName"
                    value={formData.commonName}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2 rounded"
                    required
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="lightRequirement"
                    value={formData.lightRequirement}
                    onChange={handleChange}
                    placeholder="Light Requirement"
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    name="wateringFrequency"
                    value={formData.wateringFrequency}
                    onChange={handleChange}
                    placeholder="Watering Frequency"
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="humidityPercentage"
                    value={formData.humidityPercentage}
                    onChange={handleChange}
                    placeholder="Humidity (%)"
                    className="border p-2 rounded"
                    required
                />
                <div className="flex justify-between mt-2">
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPlantForm;