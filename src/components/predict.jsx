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
    const [errors, setErrors] = useState({});
    const [prediction, setPrediction] = useState(null);
    const [displayedValues, setDisplayedValues] = useState(null);

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

    const validateField = (name, value) => {
        if (value === '') return '';
        
        switch (name) {
            case 'Area':
                if (value <= 100) return 'Area must be greater than 100 hectares';
                if (value >= 200000) return 'Area must be less than 200,000 hectares';
                break;
            case 'Annual_Rainfall':
                if (value >= 2500) return 'Annual rainfall must be less than 2,500 mm';
                if (value < 0) return 'Annual rainfall cannot be negative';
                break;
            case 'Fertilizer':
                if (value >= 26000000) return 'Fertilizer must be less than 26,000,000 kg';
                if (value < 0) return 'Fertilizer cannot be negative';
                break;
            case 'Pesticide':
                if (value >= 50000) return 'Pesticide must be less than 50,000 kg';
                if (value < 0) return 'Pesticide cannot be negative';
                break;
        }
        return '';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        const error = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate all fields before submission
        const newErrors = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (['Area', 'Annual_Rainfall', 'Fertilizer', 'Pesticide'].includes(key)) {
                const error = validateField(key, value);
                if (error) newErrors[key] = error;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const queryParams = new URLSearchParams(formData);
            const API_URL = 'https://cropyapi.onrender.com';
            const response = await fetch(`${API_URL}/predict?${queryParams.toString()}`);
            const data = await response.json();
            if (data.error) {
                alert(data.error);
            } else {
                setPrediction(data.prediction);
                setDisplayedValues({
                    yieldPerHectare: (data.prediction / parseFloat(formData.Area)).toFixed(2),
                    totalYield: data.prediction.toFixed(2),
                    area: formData.Area
                });
            }
        } catch {
            alert('Error fetching prediction');
        }
    };

    return (
        <div id="predict" className="flex items-center justify-center min-h-screen mb-10 bg-gray-900">
            <div className="w-[85%] max-w-4xl bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h2 className="mb-8 text-3xl font-bold text-white text-center">
                    Crop Yield Prediction
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-200 mb-2">Crop Type</label>
                            <select
                                name="Crop"
                                value={formData.Crop}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 
                                transition-all duration-200 bg-gray-700 hover:bg-gray-600 text-white"
                            >
                                {crops.map(crop => (
                                    <option key={crop} value={crop} className="text-white">{crop}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-200 mb-2">Growing Season</label>
                            <select
                                name="Season"
                                value={formData.Season}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 
                                transition-all duration-200 bg-gray-700 hover:bg-gray-600 text-white"
                            >
                                {seasons.map(season => (
                                    <option key={season} value={season} className="text-white">{season}</option>
                                ))}
                            </select>
                        </div>

                        {['Area', 'Annual_Rainfall', 'Fertilizer', 'Pesticide'].map((field) => (
                            <div key={field} className="group">
                                <label className="block text-sm font-semibold text-gray-200 mb-2">
                                    {field.replace('_', ' ')} {field === 'Area' ? '(Hectares)' : 
                                      field === 'Annual_Rainfall' ? '(mm)' : '(kg)'}
                                </label>
                                <input
                                    type="number"
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${
                                        errors[field] ? 'border-red-500' : 'border-gray-600'
                                    } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 
                                    transition-all duration-200 bg-gray-700 hover:bg-gray-600 text-white`}
                                    required
                                />
                                {errors[field] && (
                                    <p className="mt-1 text-sm text-red-400">{errors[field]}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-emerald-600 text-white text-lg font-semibold rounded-lg 
                                     hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 
                                     transform transition-all duration-200 hover:scale-105 shadow-lg"
                        >
                            Predict Yield
                        </button>
                    </div>
                </form>

                {prediction !== null && displayedValues && (
                    <div className="mt-8 p-8 bg-gray-700 rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl">
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Predicted Crop Yield</h3>
                            <div className="text-5xl font-bold text-emerald-400 mb-3">
                                {displayedValues.yieldPerHectare}
                            </div>
                            <p className="text-xl text-gray-300 font-medium mb-4">Metric Tons per Hectare</p>
                            <div className="flex gap-8 text-center">
                                <div className="bg-gray-800 px-6 py-3 rounded-lg">
                                    <p className="text-sm text-gray-400 mb-1">Total Yield</p>
                                    <p className="text-lg font-bold text-emerald-400">{displayedValues.totalYield} MT</p>
                                </div>
                                <div className="bg-gray-800 px-6 py-3 rounded-lg">
                                    <p className="text-sm text-gray-400 mb-1">Total Area</p>
                                    <p className="text-lg font-bold text-emerald-400">{displayedValues.area} Ha</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Use;
