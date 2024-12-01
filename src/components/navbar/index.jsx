
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../../context"


export default function Navbar(){

    // Consuming the context, destructuring the value of the global context provider
    const {search, setSearch, handleSubmit} = useContext(GlobalContext)

    // console.log(search);
    
    return (
       <nav className="h-20 w-full text-gray-100 flex justify-between items-center px-16">

        <div className="site-name text-2xl text-cyan-200 font-semibold">Xplore<span className="text-2xl text-white">Foods.</span></div>
         
        <div className="search h-full w-2/5 flex items-center">

            <input 
            className="h-12 w-full rounded-2xl px-4 shadow-md bg-slate-700 focus:shadow-cyan-200 outline-none"
            type="text"
            placeholder="Search recipes..."
            value={ search }
            onChange={(event) => setSearch(event.target.value)}
            />
        </div>
        <button 
            className="border border-slate-400 p-3 px-4 rounded-xl ml-[-140px] hover:border-slate-200 bg-slate-950"
            onClick={() => handleSubmit(search)}    
            >Search</button>

        <div className="options flex gap-8 text-lg text-gray-300 ">
            <div className="home hover:text-gray-200">
                <NavLink to={"/"}>Home</NavLink>
            </div>
            <div className="favourites hover:text-gray-200">
            <NavLink to={"/favourites"}>Favourites</NavLink>
            </div>
        </div>

       </nav>
    )
}