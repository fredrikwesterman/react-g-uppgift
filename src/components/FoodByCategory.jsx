import { useState } from "react"
import DisplaySingleMeal from "./DisplaySingleMeal"
import cardStyling from '../styles/SearchFood.module.css'
import categoriesStyle from '../styles/Categories.module.css'

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
      <div>   
        {singleMeal && openModal && <DisplaySingleMeal meal={singleMeal} OpenModal={setOpenModal}/>}
        <ul className={categoriesStyle.categoriesMeals}>
            {categoryMeals.map((meal, idx) => (
                <li key={idx} className={cardStyling.mealCardSmall} onClick={() => displaySingleFood(meal)}>
                    <img src={meal.strMealThumb} alt={meal.strMeal} className={cardStyling.imgSmall}/>
                    <h3>{meal.strMeal}</h3>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FoodByCategory