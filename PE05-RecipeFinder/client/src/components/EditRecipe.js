import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditRecipe = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });

  // Fetch existing recipe details
  useEffect(() => {
    fetch(`http://localhost:5050/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5050/recipes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    });

    if (response.ok) {
      navigate("/"); // Redirect after update
    } else {
      console.error("Error updating recipe");
    }
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Recipe Name:</label>
        <input type="text" name="name" value={recipe.name} onChange={handleChange} required />

        <label>Ingredients:</label>
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required />

        <label>Instructions:</label>
        <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required />

        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipe;