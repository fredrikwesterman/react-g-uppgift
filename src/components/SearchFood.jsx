import { useRef, useEffect, useState } from 'react'
import DisplayFood from './DisplayFood'

const SearchFood = () => {

    const [theFood, setTheFood] = useState([])

    const foodSearchInput = useRef()

    const getFood = () => {
        fetch('www.themealdb.com/api/json/v1/1/search.php?s=' + foodSearchInput.current.value)
            .then(resp => resp.json())
            .then(data => setTheFood(data))
            console.log(theFood)
    }
    

  return (
    <>
    <input ref={foodSearchInput} type="text" placeholder='type food' />
    <button onClick={getFood}>Search</button>
    {theFood && <DisplayFood food={theFood} />}
    </>
  )
}

export default SearchFood