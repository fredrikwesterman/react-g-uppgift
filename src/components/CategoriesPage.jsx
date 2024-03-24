import React from 'react'
import Categories from './Categories'
import { useEffect, useState } from 'react'
import Header from './Header'
import SearchFood from './SearchFood'
import Footer from './Footer'

const CategoriesPage = () => {

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
    <div className='pageWrapper'>
      <Header />
      <SearchFood />
          {categories ?
              <>
                  <Categories categories={categories} />
              </>
          : <h2>{isLoading}</h2>
          }
  </div>
      <Footer />
  </>
  )
}

export default CategoriesPage