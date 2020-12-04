import Axios from 'axios'
import React, {useState , useEffect} from 'react'
function Api(){
    const[recipes, setRecipes] = useState([])
    useEffect(()=>{
        console.log('i am in use effect')
        Axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res=>{
            console.log(res)
             setRecipes(res.data.meals[0]);
        })
    },[])
    // console.log(recipes)

    return(
        <div>
            <h1>
                { recipes.strMeal}
            </h1>
            <p>
               {recipes.strCategory}
            </p>
    <h3>{recipes.idMeal}</h3>
        </div>
    )
}
export default Api;