import '../styles/App.css'
import Categories from './Categories'
import SearchFood from './SearchFood'
import { useEffect, useState } from 'react'

function App() {

  const [categories, setCategories] = useState(null)
  const [isLoading, setIsLoading] = useState("Categories Loading....")

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((res) => res.json())
    .then((data) => setCategories(data.categories))
      return () => {
        setCategories(null)
      }
    }, [])
    

  return (
    <>
      <SearchFood/>
    {categories ?
      <>
        <Categories categories={categories} />
      </>
    : <h2>{isLoading}</h2>
    }
    </>
  )
}

export default App
