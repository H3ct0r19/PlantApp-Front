const PlantCard = ({ plant }) => {
    return (
        <div className="p-4 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {plant.imageURL && (
                <img
                    src={plant.imageURL}
                    alt={plant.commonName}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
            )}
            <h3 className="text-xl font-semibold text-green-800 mb-2">{plant.commonName}</h3>
            {plant.scientificName && (
                <p className="text-sm italic text-gray-600 mb-2">{plant.scientificName}</p>
            )}
            <p className="text-gray-700 text-sm mb-2">{plant.description}</p>
            
            {plant.lightRequirement && (
                <p className="text-xs text-gray-500">
                    <span className="font-medium">Sunlight:</span> {plant.lightRequirement}
                </p>
            )}
            {plant.wateringFrequency && (
                <p className="text-xs text-gray-500">
                    <span className="font-medium">Watering:</span> {plant.wateringFrequency}
                </p>
            )}
            {plant.humidityPercentage && (
                <p className="text-xs text-gray-500">
                    <span className="font-medium">Humidity:</span> {plant.humidityPercentage}%
                </p>
            )}
        </div>
    );
};

export default PlantCard;