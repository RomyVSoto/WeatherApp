"use client"

import { Search, Sun, Moon } from "lucide-react"
import useSearch from "@/hooks/useSearch"

import { useTheme } from "next-themes"

interface HeaderProps {
  search: string
  setSearch: (value: string) => void
  handleSearch: (e: React.FormEvent) => void
  onSelectCity: (city: string) => void
}

export default function Header({
  search,
  setSearch,
  handleSearch,
  onSelectCity,
}: HeaderProps) {
  const { searchResults } = useSearch(search)
  const { theme, setTheme } = useTheme()

  const showSuggestions = search.length > 2 && searchResults?.length > 0

  return (
    <header className="flex items-center justify-between gap-2 rounded-xs bg-white px-4 py-4 shadow-md sm:px-8 lg:px-16 dark:bg-[#1E293B]">
      <span className="font-heading text-xl font-bold tracking-tighter text-[#4A4BD7] dark:text-[#4CD7F6]">
        Weather App
      </span>
      <span className="flex items-center">
        <div>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
        <div className="relative flex items-center">
          <Search className="h-4 w-4 translate-x-6 text-[#6B7280] dark:text-white" />
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              value={search}
              type="text"
              placeholder="Search for a city"
              className="w-32 rounded-md bg-[#F0F4F7] py-2 pr-4 pl-8 text-left font-sans text-xs font-light text-[#596064] placeholder-[#6B7280] outline-none focus:placeholder-transparent sm:w-auto sm:pr-28 dark:bg-[#2D3748] dark:text-white dark:placeholder-[#94A3B8]"
              onChange={(e) => setSearch(e.target.value)}
              onBlur={() => setTimeout(() => setSearch(""), 150)}
            />
          </form>
          {showSuggestions && (
            <ul className="absolute top-full right-0 z-50 mt-1 w-64 overflow-hidden rounded-md bg-white shadow-lg dark:bg-[#2D3748]">
              {searchResults.map(
                (result: {
                  id: number
                  name: string
                  region: string
                  country: string
                }) => (
                  <li
                    key={result.id}
                    className="cursor-pointer px-4 py-2 text-xs text-[#596064] hover:bg-[#F0F4F7] dark:text-[#94A3B8] dark:hover:bg-[#1E293B]"
                    onMouseDown={() => {
                      onSelectCity(result.name)
                      setSearch("")
                    }}
                  >
                    <span className="font-medium text-[#1E293B] dark:text-white">
                      {result.name}
                    </span>
                    <span className="ml-1 text-[#94A3B8]">
                      {result.region}, {result.country}
                    </span>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </span>
    </header>
  )
}
