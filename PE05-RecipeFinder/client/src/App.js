import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddRecipe from "./components/AddRecipe.js";
import RecipeDetails from "./components/RecipeDetails.js";
import EditRecipe from "./components/EditRecipe.js";
import RecipeList from "./components/RecipeList.js";

function App() {
    return (
        <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/edit/:id" element={<EditRecipe />} />
        </Routes>
    );
}

export default App;