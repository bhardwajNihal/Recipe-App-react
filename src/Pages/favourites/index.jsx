import { useContext } from "react"
import { GlobalContext } from "../../context"
import { Link } from "react-router-dom"


export default function Favourites() {

    const { favourites } = useContext(GlobalContext)

    if (!favourites) return <h2 className="text-2xl text-slate-400 font-normal text-center mt-24">Loading Favourites . . .</h2>

    if (favourites.length === 0) return <h2 className="text-2xl text-slate-400 font-normal text-center mt-24">No favourites added!!!</h2>

    return (<div className=" h-svh w-full flex flex-wrap gap-12 justify-center pt-24">
        {
            favourites.map((item, index) => <div key={index} className="h-64 w-52 border border-slate-500 text-white rounded-xl overflow-hidden">
                <div className="image-part h-1/2 w-full"><img className="h-full w-full object-cover" src={item.image_url} alt={item.title} /></div>

                <div className="description h-1/2 w-full overflow-y-auto p-2">
                    <p className="text-xs text-cyan-500">{item.publisher}</p>
                    <h2 className="text-lg font-normal h-1/2 overflow-y-auto">{item.title}</h2>
                    <button className="mt-2">
                        <Link to={`/recipe-details/${item.recipe_id}`} className="bg-slate-950 border border-slate-700 p-2 rounded-lg text-sm">Recipe Details</Link>
                    </button>
                </div>
            </div>)
        }
    </div>)
}