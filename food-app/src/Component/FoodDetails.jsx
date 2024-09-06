import { useEffect, useState } from "react"
import styles from "./fooddetails.module.css"
import ItemList from "./itemList"

export default function FoodDetails({foodId}) {
    const [food,setFood]=useState({}) 
    const [isLoading, setIsLoading] = useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "ef906c4a9b4b4132a77c442f9571e794"
    useEffect(() => {
        async function fetchfood(){
           const res = await  fetch(`${URL}?apiKey=${API_KEY}`)
           const data = await res.json()
           console.log(data)
           setFood(data)
           setIsLoading(false)

        }
        fetchfood()
    }, [foodId])

  return (
   <div>
     <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt="" />
   
       <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes}Minutes</strong>
         </span>
          <span>
           👨‍👨‍👦‍👦<strong>serves {food.servings} </strong>
         </span>
         <span>
           {food.vegetarian ? "🥕 Vegetarian":"🍗 Non-Vegetarian"}
         </span>
          <span><strong>{food.vegan ? " 🐮vegan ": ""}</strong></span>
       </div>
       <div>
        <span>
            $ <strong>{food.pricePerServing /100} Per serving</strong>
         </span>
       </div>

        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading}/>
        <div className={styles.instructions}>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>{isLoading? <p>Loading....</p>: food.analyzedInstructions && food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>))}</ol>
        </div>
        </div>
      </div>
    </div>
  )  
}