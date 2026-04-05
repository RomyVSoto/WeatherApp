import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-2 rounded-xs bg-white px-16 py-4 shadow-md dark:bg-[#1E293B]">
      <span className="font-heading text-xl font-bold tracking-tighter text-[#4A4BD7] dark:text-[#4CD7F6]">
        Weather App
      </span>
      <span className="flex items-center">
        <Search className="h-6 w-4 translate-x-6 text-[#6B7280] dark:text-white" />
        <input
          type="text"
          placeholder="Search for a city"
          className="rounded-md bg-[#F0F4F7] py-2 pr-30 pl-8 text-left font-sans text-xs font-light text-[#596064] placeholder-[#6B7280] outline-none focus:placeholder-transparent dark:bg-[#1E293B] dark:text-white dark:placeholder-[#94A3B8]"
        />
      </span>
    </header>
  )
}
