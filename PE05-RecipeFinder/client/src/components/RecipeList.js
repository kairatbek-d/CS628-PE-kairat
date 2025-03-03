import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5050/recipes")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching recipes:", error));
    }, []);

    return (
        <div className="recipe-container">
            <h2>Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/add" className="add-button">Add New Recipe</Link>
        </div>
    );
};

export default RecipeList;