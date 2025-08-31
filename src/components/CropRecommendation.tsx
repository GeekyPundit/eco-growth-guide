import { useState } from 'react';
import { Sprout } from 'lucide-react';

interface FormData {
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  ph: string;
  rainfall: string;
  temperature: string;
  humidity: string;
}

const CropRecommendation = () => {
  const [formData, setFormData] = useState<FormData>({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    ph: '',
    rainfall: '',
    temperature: '',
    humidity: '',
  });
  
  const [recommendation, setRecommendation] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call with mock recommendation logic
    setTimeout(() => {
      const crops = ['Rice', 'Wheat', 'Corn', 'Cotton', 'Sugarcane', 'Barley'];
      const randomCrop = crops[Math.floor(Math.random() * crops.length)];
      setRecommendation(`Based on your soil conditions, we recommend growing ${randomCrop}. This crop is well-suited for your N-P-K levels and environmental conditions.`);
      setIsLoading(false);
    }, 1500);
  };

  const inputFields = [
    { key: 'nitrogen', label: 'Nitrogen (N)', placeholder: 'Enter N value', unit: 'kg/ha' },
    { key: 'phosphorus', label: 'Phosphorus (P)', placeholder: 'Enter P value', unit: 'kg/ha' },
    { key: 'potassium', label: 'Potassium (K)', placeholder: 'Enter K value', unit: 'kg/ha' },
    { key: 'ph', label: 'pH Level', placeholder: 'Enter pH value', unit: 'pH' },
    { key: 'rainfall', label: 'Rainfall', placeholder: 'Enter rainfall', unit: 'mm' },
    { key: 'temperature', label: 'Temperature', placeholder: 'Enter temperature', unit: '°C' },
    { key: 'humidity', label: 'Humidity', placeholder: 'Enter humidity', unit: '%' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Crop Recommendation System
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your soil and environmental parameters to get personalized crop recommendations
          </p>
        </div>

        <div className="farm-container p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inputFields.map((field, index) => (
              <div key={field.key} className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  {field.label}
                  <span className="text-muted-foreground ml-1">({field.unit})</span>
                </label>
                <input
                  type="number"
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof FormData]}
                  onChange={(e) => handleInputChange(field.key as keyof FormData, e.target.value)}
                  className="farm-input w-full"
                />
                {/* Show recommendation beside humidity field */}
                {index === inputFields.length - 1 && recommendation && (
                  <div className="mt-4 p-4 farm-container">
                    <h4 className="text-sm font-semibold text-farm-green mb-2">
                      Recommended Crop:
                    </h4>
                    <p className="text-sm text-foreground">{recommendation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <button
              onClick={handleSubmit}
              disabled={isLoading || Object.values(formData).some(value => !value)}
              className="farm-button flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Sprout className="h-5 w-5" />
                  <span>Get Recommended Crops</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CropRecommendation;