const DisplaySingleMeal = ({ displayFoodDetails }) => {
    return (
        <>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{width: "100px", height: "100px"}}/>
            <h3>{meal.strMeal}</h3>
        </>
    )
}

export default DisplaySingleMeal