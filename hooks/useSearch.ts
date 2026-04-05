import { useQuery } from "@tanstack/react-query"
import { useDebounce } from "use-debounce"

async function fetchSearch(query: string) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${query}`
  )
  return response.json()
}

export default function useSearch(query: string) {
  const [debouncedQuery] = useDebounce(query, 500)

  const { data: searchResults } = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () => fetchSearch(debouncedQuery),
    enabled: debouncedQuery.length > 2
  })

  return { searchResults }
}