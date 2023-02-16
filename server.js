const express = require('express');
const app = express();

// Hardcoded bird data for testing purposes
const birds = [
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

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
