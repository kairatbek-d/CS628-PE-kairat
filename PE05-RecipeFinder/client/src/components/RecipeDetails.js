import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5050/recipes/${id}`)
        .then((response) => response.json())
        .then((data) => setRecipe(data))
        .catch((error) => console.error(error));
    }, [id]);

    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:5050/recipes/${id}`, {
                method: "DELETE",
        });
        navigate("/");
        } catch (error) {
            console.error("Error deleting recipe:", error);
        }
    };

    if (!recipe) return <p>Loading...</p>;

    return (
        <div>
            <h2>{recipe.name}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
            <button className="edit-button" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        </div>
    );
};

export default RecipeDetails;