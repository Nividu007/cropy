import React, { useState } from 'react';

const Use = () => {
    const [formData, setFormData] = useState({
        Crop: 'Rice',
        Season: 'Kharif',
        Area: '',
        Annual_Rainfall: '',
        Fertilizer: '',
        Pesticide: ''
    });
    const [prediction, setPrediction] = useState(null);

    const crops = ['Arecanut', 'Arhar/Tur', 'Castor seed', 'Cotton(lint)', 'Dry chillies', 'Gram',
        'Linseed', 'Maize', 'Mesta', 'Niger seed', 'Onion', 'Sesamum', 'Small millets',
        'Sweet potato', 'Tapioca', 'Tobacco', 'Turmeric', 'Wheat', 'Bajra',
        'Black pepper', 'Cardamom', 'Coriander', 'Garlic', 'Ginger', 'Horse-gram',
        'Jowar', 'Ragi', 'Rice', 'Barley', 'Groundnut', 'Khesari', 'Masoor',
        'Moong(Green Gram)', 'Safflower', 'Sannhamp', 'Soyabean', 'Sunflower', 'Urad',
        'Rapeseed &Mustard', 'Peas & beans (Pulses)', 'Cashewnut', 'Potato',
        'Sugarcane', 'Cowpea(Lobia)', 'Jute', 'Guar seed', 'Oilseeds total', 'Moth',
        'Coconut ', 'Banana',];
    const seasons = ['Whole Year', 'June-October', 'November-April', 'March-May',
        'October-November', 'December-February'];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const queryParams = new URLSearchParams(formData);
            const API_URL = 'http://127.0.0.1:5000';
            const response = await fetch(`${API_URL}/predict?${queryParams.toString()}`);
            const data = await response.json();
            if (data.error) {
                alert(data.error);
            } else {
                setPrediction(data.prediction);
            }
        } catch {
            alert('Error fetching prediction');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[75%] bg-gray-400 rounded-md p-6">
                <h2 className="mb-6 text-2xl font-semibold text-gray-800 text-center">Crop Yield Prediction</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Crop</label>
                            <select
                                name="Crop"
                                value={formData.Crop}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                                {crops.map(crop => (
                                    <option key={crop} value={crop}>{crop}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Season</label>
                            <select
                                name="Season"
                                value={formData.Season}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                                {seasons.map(season => (
                                    <option key={season} value={season}>{season}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Area (hectares)</label>
                            <input
                                type="number"
                                name="Area"
                                value={formData.Area}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Annual Rainfall (mm)</label>
                            <input
                                type="number"
                                name="Annual_Rainfall"
                                value={formData.Annual_Rainfall}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Fertilizer (kg)</label>
                            <input
                                type="number"
                                name="Fertilizer"
                                value={formData.Fertilizer}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Pesticide (kg)</label>
                            <input
                                type="number"
                                name="Pesticide"
                                value={formData.Pesticide}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Predict Yield
                        </button>
                    </div>
                </form>

                {prediction !== null && (
                    <div className="mt-6 text-center">
                        <h3 className="text-lg font-medium text-gray-900">Predicted Yield:</h3>
                        <p className="text-2xl font-bold text-green-600">{prediction.toFixed(2)} tons</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Use;
