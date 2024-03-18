const FoodList = ({ food }) => {

  // console.log(food)
  const displayFoodDetails = (meal) => {
    console.log(meal)
    // TODO: Send this through props or handle right here?? I have the current object now from the map function because it loops through and takes the present object to this function
  }

  return (
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
    
  )
}

export default FoodList