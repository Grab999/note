import { useEffect, useState } from "react"
import style from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "ef906c4a9b4b4132a77c442f9571e794"

export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("pizza")
    useEffect(() => {
        async function fetchfood(){
          const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
          const data = await res.json()
          console.log(data.results)
          setFoodData(data.results)
          
        }
        fetchfood()
    }, [query])

    return (
        <div className={style.searchContainer}>
            <input className={style.input} value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
        </div>
    )
}