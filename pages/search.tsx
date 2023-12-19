import Header from "@/components/Header"
import { useRouter } from "next/router"

const Search = () => {
  const router = useRouter()
  const { q } = router.query

  return (
    <>
      <Header label="Search" />
      <div>
        <p className="text-lg font-semibold text-white/50 p-4">
          No results found for "{q}"
        </p>
      </div>
    </>
  )
}

export default Search
