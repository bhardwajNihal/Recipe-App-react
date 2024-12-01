
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context";
// to extract the query parameter from the dynamic route 
import { useParams } from "react-router-dom"


export default function Details() {

    const { recipeDetails, setRecipeDetails, favourites, setFavourites } = useContext(GlobalContext)
    const [ loading ,setLoading ] = useState(false)


    const { id } = useParams()          // destructuring id from the params
    console.log(id);

    const isFavourite = favourites.some((item) => item.recipe_id === recipeDetails.recipe_id)

    function addFavourites(item){
    // to avoid duplicates
        if(!favourites.some((favourite) => favourite.recipe_id ===item.recipe_id)) setFavourites([...favourites, item])
        console.log(item);
        console.log(favourites);
    }

    function removeFavourite(item){
        const filteredFavourites = favourites.filter((favourite) => favourite.recipe_id !== item.recipe_id )
        setFavourites([...filteredFavourites])
    }

    // to load the data as soon as the details page loads
    useEffect(() => {
        (async function fetchDetails() {
            try {
                setLoading(true)
                const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
                const data = await response.json();
                console.log(data);
                setRecipeDetails(data.recipe);
                setLoading(false)
            } catch (error) {
                console.log("error fetching details : ",error);
                
            }
        })()    //IIFE
    }, [])

    if(!recipeDetails || !recipeDetails.ingredients) return <h2 className="mt-16 text-lg text-center">Loading Details...</h2>

    return (<div className=" h-svh w-full px-20 py-12">

        <div className="details h-[400px] w-full rounded-lg border border-white overflow-hidden flex">


        <div className="image-part h-full w-1/2">
                <img className="h-full w-full object-cover" src={recipeDetails.image_url} alt="" />
            </div>

            <div className="details-part h-full w-1/2 p-4 relative">
                <h2 className="text-lg text-cyan-500">{recipeDetails.publisher}</h2>
                <h2 className="text-3xl font-semibold">{recipeDetails.title}</h2>

                <h3 className="mt-4 font-bold">Ingredients</h3>
                <div className="ingredients h-[200px] overflow-hidden overflow-y-auto">
                    <ul className="m-1 space-y-2">
                    {
                        recipeDetails.ingredients.map((item,index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                    </ul> 
                </div>

                <button className="bg-slate-950 border border-slate-600 p-2 m-4 absolute bottom-0 left-0 rounded-lg text-sm"
                       onClick={()=>(isFavourite) ? removeFavourite(recipeDetails) : addFavourites(recipeDetails)} 

                    >{(isFavourite) ? "Remove from favourites" : "Add to favourites"}</button>
            </div>
        </div>

    </div>)
}