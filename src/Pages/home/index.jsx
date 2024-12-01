import { useContext } from "react"
import RecipeComponent from "../../components/recipesComp"
import { GlobalContext } from "../../context"

export default function Home(){

    const {recipes,loading} = useContext(GlobalContext)

    if(loading) return <h2 className="text-2xl font-medium text-center mt-24">loading...</h2>

    return(<div className="flex p-12 gap-8 flex-wrap justify-center ">

        {(recipes && recipes.length>0)

            ? recipes.map((item,index) => <RecipeComponent key={index} item = {item}/>)

            : <h2 className="text-2xl font-medium text-slate-400 mt-24">Nothing to show . . . ! <br />Search Recipes to get started!!!</h2>
        }

    </div>)
}