import DisplaySingleMeal from "./DisplaySingleMeal"
import { useState } from 'react'

const FoodList = ({ food }) => {

  const [selectedMeal, setSelectedMeal] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  const displayFoodDetails = (meal) => {
    setSelectedMeal(meal)
    setOpenModal(true)
    console.log(selectedMeal)
  }

  return (
    <div style={{display: "flex"}}>
      <div>
        <ul>
          {food.meals.map((meal) => (
            <li key={meal.idMeal} onClick={() => displayFoodDetails(meal)}>
              <img src={meal.strMealThumb} alt={meal.strMeal} style={{width: "100px", height: "100px"}}/>
              <h3>{meal.strMeal}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {selectedMeal && openModal && <DisplaySingleMeal meal={selectedMeal} OpenModal={setOpenModal}/>}
      </div>
    </div>
  )
}

export default FoodList