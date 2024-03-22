import '../styles/App.css'
import SearchFood from './SearchFood'
import { useEffect, useState } from 'react'

function App() {

  const [categories, setCategories] = useState(null)
  const [haveData, setHaveData] = useState(false)
  const [isLoading, setIsLoading] = useState("Page Loading....")

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((res) => res.json())
    .then((data) => setCategories(data))
      return () => {
        setCategories(null)
      }
    }, [])
    
    console.log(categories)

  return (
    <>
    {categories ?
      <>
        <SearchFood />
        <div>
          <ul>
            {categories.map(({ strCategory, strCategoryThumb, idCategory }) => (
              <li key={idCategory}>
                <img src={strCategoryThumb} alt={strCategory} />
                <h3>{strCategory}</h3>
              </li>
            ))}
          </ul>
        </div>
      </>
    : <h2>{isLoading}</h2>
    }
    </>
  )
}

export default App
