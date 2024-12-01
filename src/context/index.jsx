

// wrapping complete context API logic, inside a function, and import it wherever needed for better modularity and reusability

import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {           //wrapper component for context provider

    // defing the global states 
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([])
    const [recipeDetails, setRecipeDetails] = useState([]) 
    const [ favourites, setFavourites ] = useState([])

    async function handleSubmit(searchText) {
        try {
            setLoading(true)
            const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchText}`);
            const data = await response.json();
            setRecipes(data?.recipes)
            console.log(recipes);
            setLoading(false)
        } catch (e) {
            console.log(e);

        }

    }

    return <GlobalContext.Provider value={{ search, setSearch, handleSubmit, loading, recipes, recipeDetails, setRecipeDetails,favourites, setFavourites }}>
        {children}
    </GlobalContext.Provider>
}