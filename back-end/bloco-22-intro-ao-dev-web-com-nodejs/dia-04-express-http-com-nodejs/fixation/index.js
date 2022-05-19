const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
    { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
    { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
    { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes/search', (req, res) => {
    const { name, maxPrice, minPrice } = req.query;

    const filteredRecipes = recipes.filter((recipe) => recipe.name.includes(name) && recipe.price <= parseInt(maxPrice) && recipe.price >= parseInt(minPrice));

    if(!filteredRecipes) return res.status(404).json({ message: 'Not found'});
    return res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res) => {
    const { id } = req.params;

    const recipeById = recipes.find((recipe) => recipe.id === parseInt(id));

    if(!recipeById) return res.status(404).json({ message: 'Recipe not found!' });
    res.status(200).json(recipeById);
});

app.get('/recipes', (req, res) => {
    // const orderedRecipes = recipes.sort((a, b) => a.name.localeCompare(b.name));
    res.json(recipes);
});

app.post('/recipes', (req, res) => {
    const { id, name, price, waitTime } = req.body;
    recipes.push({ id, name, price, waitTime });
    res.status(201).json({ message: 'Recipe created sucessfully!' });
});

app.put('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  
    if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
  
    recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };
  
    res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  
    if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
  
    recipes.splice(recipeIndex, 1);
  
    res.status(204).end();
});

app.get('/drinks/search', (req, res) => {
    const { name } = req.query;

    const filteredDrinks = drinks.filter((drink) => drink.name.includes(name));

    if(!filteredDrinks) return res.status(404).json({ message: 'Not found'});
    return res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', (req, res) => {
    const { id } = req.params;

    const drinkById = drinks.find((drink) => drink.id === parseInt(id));

    if(!drinkById) return res.status(404).json({ message: 'Drink not found!' });
    res.status(200).json(drinkById);
});

app.get('/drinks', (req, res) => {
    const orderedDrinks = drinks.sort((a, b) => {
        /* if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0; */
        return a.name.localeCompare(b.name);
    });
    res.json(orderedDrinks);
});

app.post('/drinks', (req, res) => {
    const { id, name, price } = req.body;
    drinks.push({ id, name, price });
    res.status(201).json({ message: 'Drink created sucessfully!' });
});

app.listen(3001, () => console.log(' Listening on port 3001'));
