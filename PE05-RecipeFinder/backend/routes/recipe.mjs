import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get all recipes
router.get("/", async (req, res) => {
  let collection = await db.collection("recipes");
  let results = await collection.find({}).toArray();
  res.status(200).send(results);
});

// Get a single recipe
router.get("/:id", async (req, res) => {
  let collection = await db.collection("recipes");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);
  result ? res.status(200).send(result) : res.status(404).send("Not found");
});

// Add a new recipe
router.post("/", async (req, res) => {
  let newRecipe = {
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };
  let collection = await db.collection("recipes");
  let result = await collection.insertOne(newRecipe);
  res.status(201).send(result);
});

// Update a recipe
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  
  // Exclude _id from updates
  const { _id, ...updates } = req.body;
  const updateDoc = { $set: updates };

  let collection = await db.collection("recipes");
  let result = await collection.updateOne(query, updateDoc);
  res.status(200).send(result);
});

// Delete a recipe
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("recipes");
  let result = await collection.deleteOne(query);
  res.status(200).send(result);
});

export default router;