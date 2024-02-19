"use client"
import { FiSearch } from "react-icons/fi";

const SearchBar = ({setFiltered}) => {

  const handleSearchBar = (e) => { 
    setFiltered(e.target.value)
   }


  return (
    <div className='container'>
        <form className="d-flex" role="search">
           <div className='search-container'>
                <input type="text" className='searchInput' placeholder="Search a product..." onChange={(e)=>handleSearchBar(e)}/>
                <span className='search-icon'>
                    <FiSearch/>
                </span>
                <div className='searchMain search-1'></div>
                <div className='searchMain search-2'></div>
                <div className='searchMain search-3'></div>
                <div className='searchMain search-4'></div>
                <div className='searchMain search-5'></div>
           </div>
        </form>
    </div>
  )
}

export default SearchBar