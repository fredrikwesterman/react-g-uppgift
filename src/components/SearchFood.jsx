import { useRef, useEffect, useState } from 'react'
import FoodList from './FoodList'

const SearchFood = () => {

    const [meals, setMeals] = useState(null)

    const foodSearchInput = useRef()

    const getFoodList = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + foodSearchInput.current.value)
            .then((resp) => resp.json())
            .then((data) => setMeals(data))
            console.log(meals)
    }

  return (
    <>
    <input ref={foodSearchInput} type="text" placeholder='type food' />
    <button onClick={getFoodList}>Search</button>
    {meals && <FoodList food={meals} />}
    </>
  )
}

export default SearchFood