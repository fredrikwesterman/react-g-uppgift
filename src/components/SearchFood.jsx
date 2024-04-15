import { useRef, useState } from 'react'
import FoodList from './FoodList'
import searchStyle from '../styles/SearchFood.module.css'

const SearchFood = () => {

    const [meals, setMeals] = useState(null)
    const [noResult, setNoResult] = useState(false)
    const [wrongSearch, setWrongSearch] = useState("")

    const foodSearchInput = useRef()

    const getFoodList = () => {
      setNoResult(false)
      setMeals(null) // sätter värdet till noll om man sökt innan

      const inputValue = foodSearchInput.current.value
      if (inputValue) {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue)
        .then((resp) => resp.json())
        .then((data) => setMeals(data))
        .catch((error) => error)
        console.log(meals)
        foodSearchInput.current.value = ''
      } else {
        setNoResult(true)
      }
    }

    const resetList = () => {
      setMeals(null)
      setNoResult(false)
    }

  return (
    <div className={searchStyle.searchFoodWrapper}>
      <div className={searchStyle.inputWrapper}>
        <input ref={foodSearchInput} type="text" placeholder='Type a meal..' />
        <button onClick={getFoodList}>Search</button>
        <button onClick={resetList}>Reset</button>
      </div>
        {meals &&
          <>
            <div className={searchStyle.searchMealList}>
              <FoodList food={meals} />
            </div>
          </>
        }
        {noResult && <div>No food 😔</div>}
    </div>
  )
}

export default SearchFood