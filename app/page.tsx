"use client"

import { useState } from "react"
import useWeather from "@/hooks/useWeather"

import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Eye, Haze, Sun, Thermometer } from "lucide-react"
import hero from "@/public/hero.png"
import Image from "next/image"
import Header from "@/components/Header"

export default function Home() {
  const [city, setCity] = useState("Santo Domingo")
  const [search, setSearch] = useState("Santo Domingo")

  const { weatherData, isLoading, error } = useWeather(city)

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    setCity(search)
    setSearch("")
  }

  function getDayName(dateString: string) {
    return new Date(dateString)
      .toLocaleDateString("en", { weekday: "short" })
      .toUpperCase()
  }

  function getUVLabel(uv: number) {
    if (uv <= 2)
      return {
        label: "Low",
        message: "No protection needed. Safe to be outside.",
      }
    if (uv <= 5)
      return {
        label: "Moderate",
        message: "Protection recommended. Wear sunscreen.",
      }
    if (uv <= 7)
      return {
        label: "High",
        message: "Protection essential. Reduce time in sun.",
      }
    if (uv <= 10)
      return {
        label: "Very High",
        message: "Extra protection needed. Avoid midday sun.",
      }
    return { label: "Extreme", message: "Stay indoors during midday hours." }
  }

  function getVisibilityMessage(km: number) {
    if (km >= 10) return "Perfectly clear view."
    if (km >= 5) return "Good visibility conditions."
    if (km >= 2) return "Moderate visibility. Some haze present."
    return "Poor visibility. Fog or heavy rain likely."
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-[#94A3B8]">Cargando...</p>
      </div>
    )
  }

  if (error || !weatherData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-red-400">Ciudad no encontrada.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <Header
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 py-8">
        <section
          className="h-90 w-full rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.src})` }}
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-1 items-center justify-between px-20">
              <div className="flex flex-col">
                <span className="font-sans text-3xl font-medium">
                  {weatherData?.location.name}, {weatherData?.location.country}
                </span>
                <span className="flex items-center gap-2 font-sans text-lg font-light text-[#4A4BD7] dark:text-[#4CD7F6]">
                  <Image
                    src={`https:${weatherData.current.condition.icon}`}
                    alt={weatherData.current.condition.text}
                    width={32}
                    height={32}
                  />
                  {weatherData?.current.condition.text}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-8xl font-thin text-[#4A4BD7] dark:text-[#4CD7F6]">
                  {weatherData?.current.temp_c}°C
                </span>
                <span className="text-md flex items-center justify-end gap-1 font-sans font-light text-[#596064] dark:text-[#94A3B8]">
                  <Thermometer className="h-4 w-4 text-[#4A4BD7] dark:text-[#4CD7F6]" />
                  Feels like {weatherData?.current.feelslike_c}°C
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between bg-[#F7F9FB]/20 px-20 py-5 dark:bg-[#1E293B]/20">
              <span className="flex flex-col gap-1">
                <p className="font-sans text-xs font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
                  HUMIDITY
                </p>
                <p className="font-base font-sans text-2xl tracking-tighter">
                  {weatherData?.current.humidity}%
                </p>
              </span>
              <span className="flex flex-col gap-1">
                <p className="font-sans text-xs font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
                  WIND SPEED
                </p>
                <p className="font-base font-sans text-2xl tracking-tighter">
                  {weatherData?.current.wind_kph} km/h
                </p>
              </span>
              <span className="flex flex-col gap-1">
                <p className="font-sans text-xs font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
                  PRESSURE
                </p>
                <p className="font-base font-sans text-2xl tracking-tighter">
                  {weatherData?.current.pressure_mb} hPa
                </p>
              </span>
              <span className="flex flex-col gap-1">
                <p className="font-sans text-xs font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
                  PRECIPITATION
                </p>
                <p className="font-base font-sans text-2xl tracking-tighter">
                  {weatherData?.current.precip_mm}%
                </p>
              </span>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <div className="font-base font-sans text-sm tracking-widest text-[#596064] dark:text-[#94A3B8]">
            7-DAY FORECAST
          </div>
          <div className="flex justify-between gap-4">
            {weatherData?.forecast.forecastday.map((day) => (
              <div
                key={day.date}
                className="flex w-full flex-col items-center gap-5 rounded-lg bg-white py-4 dark:bg-[#1E293B]"
              >
                <span className="text-md font-sans font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
                  {getDayName(day.date)}
                </span>
                <span>
                  <Image
                    src={`https:${day.day.condition.icon}`}
                    alt={`${day.day.condition.text}`}
                    className="h-14 w-14"
                    width={56}
                    height={56}
                  />
                </span>
                <span className="flex gap-2 text-lg text-[#596064] dark:text-[#94A3B8]">
                  <p className="font-bold">{day.day.maxtemp_c}°</p>
                  <p className="font-light">{day.day.mintemp_c}°</p>
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className="flex justify-between gap-4">
          <div className="flex w-full flex-col gap-3 rounded-lg bg-white p-4 dark:bg-[#1E293B]">
            <span className="flex items-center gap-2 font-sans text-sm font-medium tracking-widest text-[#596064] dark:text-[#94A3B8]">
              <Sun className="h-5 w-5 text-[#4A4BD7] dark:text-[#4CD7F6]" />
              UV INDEX
            </span>
            <span className="font-sans text-3xl font-medium tracking-wider">
              {weatherData?.current.uv}{" "}
              {getUVLabel(weatherData?.current.uv || 0).label}
            </span>
            <span>
              <Progress value={weatherData?.current.uv} max={11} />
            </span>
            <span className="text-sm text-[#596064] dark:text-[#94A3B8]">
              {getUVLabel(weatherData?.current.uv || 0).message}
            </span>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-lg bg-white p-4 dark:bg-[#1E293B]">
            <span className="flex items-center gap-2 font-sans text-sm font-medium tracking-widest text-[#596064] dark:text-[#94A3B8]">
              <Eye className="h-5 w-5 text-[#4A4BD7] dark:text-[#4CD7F6]" />
              VISIBILITY
            </span>
            <span className="font-sans text-3xl font-medium tracking-wider">
              {weatherData?.current.vis_km} km
            </span>
            <span className="text-sm text-[#596064] dark:text-[#94A3B8]">
              {getVisibilityMessage(weatherData?.current.vis_km || 0)}
            </span>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-lg bg-white p-4 dark:bg-[#1E293B]">
            <span className="flex items-center gap-2 font-sans text-sm font-medium tracking-widest text-[#596064] dark:text-[#94A3B8]">
              <Haze className="h-5 w-5 text-[#4A4BD7] dark:text-[#4CD7F6]" />
              DAYLIGHT CYCLE
            </span>
            <span className="flex flex-col gap-2">
              <span className="flex items-center justify-between">
                <p>Sunrise</p>
                <p className="font-semibold">
                  {weatherData?.forecast.forecastday[0].astro.sunrise}
                </p>
              </span>
              <Separator />
              <span className="flex items-center justify-between">
                <p>Sunset</p>
                <p className="font-semibold">
                  {weatherData?.forecast.forecastday[0].astro.sunset}
                </p>
              </span>
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}
