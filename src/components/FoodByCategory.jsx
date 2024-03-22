import { useState } from "react"
import DisplaySingleMeal from "./DisplaySingleMeal"

const FoodByCategory = ({ categoryMeals }) => {

    const [singleMeal, setSingleMeal] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    const displaySingleFood = (meal) => {
        console.log(meal)
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + meal.idMeal)
        .then((res) => res.json())
        .then((data) => setSingleMeal(data.meals[0]))
        setOpenModal(true)
    }

  return (
      <div style={{display: "flex"}}>   
        <ul>
            {categoryMeals.map((meal, idx) => (
                <li key={idx} onClick={() => displaySingleFood(meal)}>
                    <h3>{meal.strMeal}</h3>
                    <img src={meal.strMealThumb} alt={meal.strMeal} style={{width: "100px", height: "100px"}} />
                </li>
            ))}
        </ul>
        {singleMeal && openModal && <DisplaySingleMeal meal={singleMeal} OpenModal={setOpenModal}/>}
    </div>
  )
}

export default FoodByCategory