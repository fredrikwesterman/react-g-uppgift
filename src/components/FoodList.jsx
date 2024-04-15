import { useState } from 'react'
import DisplaySingleMeal from "./DisplaySingleMeal"
import searchStyle from '../styles/SearchFood.module.css'

const FoodList = ({ food }) => {

  const [selectedMeal, setSelectedMeal] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  
  const displayFoodDetails = (meal) => {
    setSelectedMeal(meal)
    setOpenModal(true)
    console.log(selectedMeal)
  }

  return (
    <>
        {selectedMeal && openModal && <DisplaySingleMeal meal={selectedMeal} OpenModal={setOpenModal}/>}
        <ul>
          {food.meals.map((meal) => (
            <li key={meal.idMeal} className={searchStyle.mealCardSmall} onClick={() => displayFoodDetails(meal)}>
              <img src={meal.strMealThumb} alt={meal.strMeal} className={searchStyle.imgSmall}/>
              <h3>{meal.strMeal}</h3>
            </li>
          ))}
        </ul>
    </>
  )
}

export default FoodList