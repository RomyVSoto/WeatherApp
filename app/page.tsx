"use client"

import { useState } from "react"
import useWeather from "@/hooks/useWeather"

import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Cloud, CloudSun, Eye, Haze, Sun, Thermometer } from "lucide-react"
import hero from "@/public/hero.png"

export default function Home() {
  const [city, setCity] = useState("Santo Domingo")
  const [search, setSearch] = useState("Santo Domingo")

  const { weatherData, isLoading, error } = useWeather(city)

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    setCity(search)
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 py-8">
      <section
        className="h-90 w-full rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-1 items-center justify-between px-20">
            <div className="flex flex-col">
              <span className="font-sans text-3xl font-medium">
                Reykjavík, Iceland
              </span>
              <span className="flex items-center gap-2 font-sans text-lg font-light text-[#596064] dark:text-[#94A3B8]">
                <CloudSun className="h-6 w-6 text-[#4A4BD7] dark:text-[#4CD7F6]" />
                Partly Cloudy
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-8xl font-thin text-[#4A4BD7] dark:text-[#4CD7F6]">
                12°C
              </span>
              <span className="text-md flex items-center justify-end gap-1 font-sans font-light text-[#596064] dark:text-[#94A3B8]">
                <Thermometer className="h-4 w-4 text-[#4A4BD7] dark:text-[#4CD7F6]" />
                Feels like 10°C
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#F7F9FB]/20 px-20 py-5 dark:bg-[#1E293B]/20">
            <span className="flex flex-col gap-1">
              <p className="font-sans text-xs font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
                HUMIDITY
              </p>
              <p className="font-base font-sans text-2xl tracking-tighter">
                64%
              </p>
            </span>
            <span className="flex flex-col gap-1">
              <p className="font-sans text-xs font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
                WIND SPEED
              </p>
              <p className="font-base font-sans text-2xl tracking-tighter">
                18 km/h
              </p>
            </span>
            <span className="flex flex-col gap-1">
              <p className="font-sans text-xs font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
                PRESSURE
              </p>
              <p className="font-base font-sans text-2xl tracking-tighter">
                1012 hPa
              </p>
            </span>
            <span className="flex flex-col gap-1">
              <p className="font-sans text-xs font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
                PRECIPITATION
              </p>
              <p className="font-base font-sans text-2xl tracking-tighter">
                5%
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
          <div className="flex w-full flex-col items-center gap-5 rounded-lg bg-white py-4 dark:bg-[#1E293B]">
            <span className="text-md font-sans font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
              TUE
            </span>
            <span>
              <Cloud className="h-14 w-14 text-[#4A4BD7] dark:text-[#4CD7F6]" />
            </span>
            <span className="flex gap-2 text-lg text-[#596064] dark:text-[#94A3B8]">
              <p className="font-bold">11°</p>
              <p className="font-light">8°</p>
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-5 rounded-lg bg-white py-4 dark:bg-[#1E293B]">
            <span className="text-md font-sans font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
              TUE
            </span>
            <span>
              <Cloud className="h-14 w-14 text-[#4A4BD7] dark:text-[#4CD7F6]" />
            </span>
            <span className="flex gap-2 text-lg text-[#596064] dark:text-[#94A3B8]">
              <p className="font-bold">11°</p>
              <p className="font-light">8°</p>
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-5 rounded-lg bg-white py-4 dark:bg-[#1E293B]">
            <span className="text-md font-sans font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
              TUE
            </span>
            <span>
              <Cloud className="h-14 w-14 text-[#4A4BD7] dark:text-[#4CD7F6]" />
            </span>
            <span className="flex gap-2 text-lg text-[#596064] dark:text-[#94A3B8]">
              <p className="font-bold">11°</p>
              <p className="font-light">8°</p>
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-5 rounded-lg bg-white py-4 dark:bg-[#1E293B]">
            <span className="text-md font-sans font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
              TUE
            </span>
            <span>
              <Cloud className="h-14 w-14 text-[#4A4BD7] dark:text-[#4CD7F6]" />
            </span>
            <span className="flex gap-2 text-lg text-[#596064] dark:text-[#94A3B8]">
              <p className="font-bold">11°</p>
              <p className="font-light">8°</p>
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-5 rounded-lg bg-white py-4 dark:bg-[#1E293B]">
            <span className="text-md font-sans font-light tracking-wider text-[#596064] dark:text-[#94A3B8]">
              TUE
            </span>
            <span>
              <Cloud className="h-14 w-14 text-[#4A4BD7] dark:text-[#4CD7F6]" />
            </span>
            <span className="flex gap-2 text-lg text-[#596064] dark:text-[#94A3B8]">
              <p className="font-bold">11°</p>
              <p className="font-light">8°</p>
            </span>
          </div>
        </div>
      </section>
      <section className="flex justify-between gap-4">
        <div className="flex w-full flex-col gap-3 rounded-lg bg-white p-4 dark:bg-[#1E293B]">
          <span className="flex items-center gap-2 font-sans text-sm font-medium tracking-widest text-[#596064] dark:text-[#94A3B8]">
            <Sun className="h-5 w-5 text-[#4A4BD7] dark:text-[#4CD7F6]" />
            UV INDEX
          </span>
          <span className="font-sans text-3xl font-medium tracking-wider">
            4 Moderate
          </span>
          <span>
            <Progress value={4} max={10} />
          </span>
          <span className="text-sm text-[#596064] dark:text-[#94A3B8]">
            Moderate risk from unprotected sun exposure. Protection is needed.
          </span>
        </div>
        <div className="flex w-full flex-col gap-3 rounded-lg bg-white p-4 dark:bg-[#1E293B]">
          <span className="flex items-center gap-2 font-sans text-sm font-medium tracking-widest text-[#596064] dark:text-[#94A3B8]">
            <Eye className="h-5 w-5 text-[#4A4BD7] dark:text-[#4CD7F6]" />
            VISIBILITY
          </span>
          <span className="font-sans text-3xl font-medium tracking-wider">
            10 km
          </span>
          <span className="text-sm text-[#596064] dark:text-[#94A3B8]">
            Atmospheric conditions are clear. High definition horizontal range.
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
              <p className="font-semibold">08:14</p>
            </span>
            <Separator />
            <span className="flex items-center justify-between">
              <p>Sunset</p>
              <p className="font-semibold">17:52</p>
            </span>
          </span>
        </div>
      </section>
    </div>
  )
}
