import { FaSearch } from "react-icons/fa"
import qs from "query-string"
import { useRouter } from "next/router"
import { useState } from "react"

interface SearchBarProps {
  hidden: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({ hidden }) => {
  const router = useRouter()
  const [value, setValue] = useState("")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!value) return

    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { q: value },
      },
      { skipEmptyString: true }
    )

    router.push(url)
  }

  return (
    <div className={`px-6 py-4 ${hidden ? "hidden" : "block"}  lg:block `}>
      <form
        onSubmit={onSubmit}
        className="bg-neutral-800 rounded-full p-4 flex items-center"
      >
        <div>
          <FaSearch color="grey" size={20} />
        </div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="search"
          placeholder="Search"
          className="bg-transparent outline-none border-none text-white ml-4 w-full"
        />
      </form>
    </div>
  )
}

export default SearchBar
