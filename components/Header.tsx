import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-2 bg-white dark:bg-[#0F172A] px-20 py-4">
      <span className="font-heading text-xl font-bold tracking-tighter text-[#4CD7F6] dark:text-white">
        Weather App
      </span>
      <span className="flex items-center">
        <Search className="h-6 w-4 translate-x-6 text-[#6B7280] dark:text-white" />
        <input
          type="text"
          placeholder="Search for a city"
          className="rounded-md bg-[#F0F4F7] py-2 pr-30 pl-8 text-left font-sans text-xs text-[#596064] font-light placeholder-[#6B7280] focus:placeholder-transparent outline-none dark:bg-[#1E293B] dark:text-white dark:placeholder-[#94A3B8]"
        />
      </span>
    </header>
  )
}
