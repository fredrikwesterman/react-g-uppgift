import { useState } from 'react'
import FoodByCategory from './FoodByCategory'
import categoriesStyle from '../styles/Categories.module.css'

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
      <div className={categoriesStyle.categoriesUl}>
        <ul>
            {categories.map(({ strCategory, idCategory }) => (
              <li key={idCategory} onClick={() => listCategoryMeal(strCategory)}>
                <h3>{strCategory}</h3>
              </li> 
            ))}
        </ul>
      </div>
      <div className={categoriesStyle.categorieWrapper}>
        {categoryMeals && 
        <>
          <button className={categoriesStyle.minimizeBtn} onClick={resetMeals}>Minimize Category</button>
          <FoodByCategory categoryMeals={categoryMeals} />
        </>
        }
      </div>
  </>

  )
}

export default Categories