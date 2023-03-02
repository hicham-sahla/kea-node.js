const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Hardcoded bird data for testing purposes
let birds = [
  { id: '1', species: 'Pigeon', color: 'Grey' },
  { id: '2', species: 'Crow', color: 'Black' },
  { id: '3', species: 'Parrot', color: 'Green' },
  { id: '4', species: 'Seagull', color: 'White' },
];

// Middleware to parse JSON
app.use(express.json());

// GET all birds
app.get('/birds', (req, res) => {
  res.status(200).json(birds);
});

// GET bird by id
app.get('/birds/:id', (req, res) => {
  const id = req.params.id;
  const bird = birds.find(bird => bird.id === id);
  if (bird) {
    res.status(200).json(bird);
  } else {
    res.status(404).json({ error: 'Bird not found' });
  }
});

// POST a new bird
app.post('/birds', (req, res) => {
  const bird = req.body;
  const id = (birds.length + 1).toString();
  bird.id = id;
  birds.push(bird);
  res.status(201).json({ message: 'Bird created', bird });
});

// PUT update a bird by id
app.put('/birds/:id', (req, res) => {
  const id = req.params.id;
  const index = birds.findIndex(bird => bird.id === id);
  if (index !== -1) {
    const updatedBird = { ...birds[index], ...req.body, id };
    birds[index] = updatedBird;
    res.status(200).json({ message: 'Bird updated', bird: updatedBird });
  } else {
    res.status(404).json({ error: 'Bird not found' });
  }
});

// DELETE a bird by id
app.delete('/birds/:id', (req, res) => {
  const id = req.params.id;
  const index = birds.findIndex(bird => bird.id === id);
  if (index !== -1) {
    birds.splice(index, 1);
    res.status(200).json({ message: 'Bird deleted' });
  } else {
    res.status(404).json({ error: 'Bird not found' });
  }
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
