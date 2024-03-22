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
        <ul>
            {categories.map(({ strCategory, idCategory }) => (
                <li key={idCategory} onClick={() => listCategoryMeal(strCategory)}>
                <h3>{strCategory}</h3>
              </li>
            ))}
        </ul>
        {categoryMeals && 
        <>
            <button onClick={resetMeals}>Back</button>
            <FoodByCategory categoryMeals={categoryMeals} />
        </>
        }
    </>
  )
}

export default Categories