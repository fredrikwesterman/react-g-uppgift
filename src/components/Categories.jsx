import { useState } from 'react'
import FoodByCategory from './FoodByCategory'

const Categories = ({ categories }) => {

    const [categoryMeals, setCategoryMeals] = useState(null)

    const listCategoryMeal = (meals) => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + meals)
            .then((res) => res.json())
            .then((data) => setCategoryMeals(data.meals))
            console.log(categoryMeals)
    }

    const resetMeals = () => {
        setCategoryMeals(null)
    }

  return (
    <>
      <div>
        <ul style={{display: "flex"}}>
            {categories.map(({ strCategory, idCategory }) => (
              <li style={{margin: "10px"}} key={idCategory} onClick={() => listCategoryMeal(strCategory)}>
                <h3>{strCategory}</h3>
              </li> 
            ))}
        </ul>
      </div>
        {categoryMeals && 
        <div>
            <button onClick={resetMeals}>Minimize Category</button>
            <FoodByCategory categoryMeals={categoryMeals} />
        </div>
        }
    </>
  )
}

export default Categories