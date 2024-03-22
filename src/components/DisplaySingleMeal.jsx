const DisplaySingleMeal = ({ meal, OpenModal }) => {

    console.log(meal)

    const ingredients = Object.keys(meal)
    .filter((key) => key.includes('strIngredient'))
    .map(key => meal[key])
    .filter(ingredient => ingredient && ingredient.trim())

    const measurements = Object.keys(meal)
    .filter((key) => key.includes('strMeasure'))
    .map(key => meal[key])
        
    return (
        <>
            <div>
                <h2>{meal.strMeal}</h2>
                <i>{meal.strArea}</i>
                <button onClick={() => OpenModal(false)}>❌</button>
            </div>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <ul>
                {ingredients.map((ing, idx) => (
                    <li key={idx}>{ing} - {measurements[idx]}</li>
                    ))}
            </ul>
            <p>{meal.strInstructions}</p>
        </>
    )
}

export default DisplaySingleMeal