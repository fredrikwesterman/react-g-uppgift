import { useRef, useEffect, useState } from 'react'
import FoodList from './FoodList'

const SearchFood = () => {

    const [meals, setMeals] = useState(null)

    const foodSearchInput = useRef()

    const getFoodList = () => {
      // if(foodSearchInput.current.value = ''){
      //   alert("need to type some food!")
      // }
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + foodSearchInput.current.value)
            .then((resp) => resp.json())
            .then((data) => setMeals(data))
            console.log(meals)
            foodSearchInput.current.value = ''
    }

    const resetList = () => {
      setMeals(null)
    }

  return (
    <>
    <input ref={foodSearchInput} type="text" placeholder='Type a meal..' />
    <button onClick={getFoodList}>Search</button>
    {meals && <button onClick={resetList}>Back</button>}
    {meals && <FoodList food={meals} />}
    </>
  )
}

export default SearchFood