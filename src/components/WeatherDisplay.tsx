import { useQuery } from "@tanstack/react-query";

interface WeatherData {
  name: string;
  weather: { description: string }[];
  main: { temp: number };
}

const fetchWeather = async (city: string): Promise<WeatherData> => {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  if (!response.ok) throw new Error("Failed to fetch weather data");
  return response.json();
};

interface WeatherDisplayProps {
  city: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ city }) => {
  const { data, error, isLoading } = useQuery<WeatherData, Error>({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city, // Only fetch if city is provided
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{data?.name}</h2>
      <p className="text-gray-600">{data?.weather[0].description}</p>
      <p className="text-xl font-semibold">{data?.main.temp}°C</p>
    </div>
  );
};

export default WeatherDisplay;