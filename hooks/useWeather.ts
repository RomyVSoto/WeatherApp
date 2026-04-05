import { useQuery } from "@tanstack/react-query"
import type { WeatherResponse } from "@/types"

async function fetchWeather(city: string){
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&days=5&aqi=yes`
  )
  return response.json()
}

export default function useWeather(city: string) {
  const {
    data: weatherData,
    isLoading,
    error,
  } = useQuery<WeatherResponse>({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: city.length > 0,
  })

  return { weatherData, isLoading, error }
}
