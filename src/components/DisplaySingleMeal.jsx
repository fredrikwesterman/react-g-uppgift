import { useState } from 'react'

const DisplaySingleMeal = ({ meal }) => {

    const ingredients = []
    const measurements = []

    for(let i = 1; i <= 20; i++){
        ingredients.push(meal[`strIngredient&{i}`])
        measurements.push(meal[`strMeasure&{i}`])
    }

    console.log(ingredients)
    console.log(measurements)

    return (
        <>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
            <ul>
                {ingredients.map((ing, idx) => (
                    <li key={idx}>{ing} - {measurements[idx]}</li>
                ))}
            </ul>
        </>
    )
}

export default DisplaySingleMeal