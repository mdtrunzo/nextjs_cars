'use client'
import { useState } from 'react'
import SearchManufacturer from '@/constants/SearchManufacturer'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>('')

  const handleSearch = () => {}

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar
