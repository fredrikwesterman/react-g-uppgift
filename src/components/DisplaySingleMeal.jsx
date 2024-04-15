import searchStyle from '../styles/SearchFood.module.css'

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
        <div className={searchStyle.mealCardBig}>
            <div className={searchStyle.bigCardHeading}>
                <h2>{meal.strMeal}</h2>
                <button onClick={() => OpenModal(false)}>❌</button>
            </div>
            <div className={searchStyle.cardLayout}>
                <img src={meal.strMealThumb} alt={meal.strMeal} className={searchStyle.imgBig}/>
                <ul>
                <p>Ingredients:</p>
                <br />
                    {ingredients.map((ing, idx) => (
                        <li key={idx}>{ing} - {measurements[idx]}</li>
                        ))}
                </ul>
            </div>
                <p><b>Cooking Instructions:</b></p>
                {meal.strInstructions.split('\n\r').map((instr, idx) => (
                    <p style={{textAlign: 'left', padding: '5px'}} key={idx}>{instr}</p>
                ))}
        </div>
    )
}

export default DisplaySingleMeal