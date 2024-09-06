import { useState } from "react"
import Search from "./Component/Search"
import FoodList from "./Component/FoodList"
import Nav from "./Component/Nav"
import "./App.css"
import Container from "./Component/Container"
import InnerContainer from "./Component/InnerContainer"
import Fooddetails from "./Component/FoodDetails"
import FoodDetails from "./Component/FoodDetails"
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState ("658615");
  return (
    <div className="App">
      <Nav />
      <Search foodData = {foodData} setFoodData = {setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId ={setFoodId} foodData = {foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId ={foodId}/>
        </InnerContainer>
      </Container>
      
     
    </div>
  )
}

export default App
