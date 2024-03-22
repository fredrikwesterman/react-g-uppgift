import { useRef, useState } from 'react'
import FoodList from './FoodList'

const SearchFood = () => {

    const [meals, setMeals] = useState(null)
    const [noResult, setNoResult] = useState(false)

    const foodSearchInput = useRef()

    const getFoodList = () => {
      setNoResult(false)
      const inputValue = foodSearchInput.current.value
      if (inputValue) {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue)
        .then((resp) => resp.json())
        .then((data) => setMeals(data))
        console.log(meals)
        foodSearchInput.current.value = ''
      } else {
        setNoResult(true)
      }
    }

    const resetList = () => {
      setMeals(null)
    }

  return (
    <>
    <input ref={foodSearchInput} type="text" placeholder='Type a meal..' />
    <button onClick={getFoodList}>Search</button>
    {meals && 
      <>
        <button onClick={resetList}>Back</button>
        <FoodList food={meals} />
      </>
    }
    {noResult && <div>No food 😔</div>}
    </>
  )
}

export default SearchFood