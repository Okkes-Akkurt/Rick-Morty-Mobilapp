const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors=require('cors')


dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/api/episodes', async (req, res) => {
	try {
		const response = await axios.get('https://rickandmortyapi.com/api/episode');
		res.json(response.data);
	} catch (error) {
		console.error('Error fetching episodes:', error);
		res.status(500).json({ message: 'Server Error' });
	}
});

app.get('/api/episodes/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
		res.json(response.data);
	} catch (error) {
		console.error(`Error fetching episode with id ${id}:`, error);
		res.status(500).json({ message: 'Server Error' });
	}
});

app.get('/api/characters', async (req, res) => {
	try {
		const response = await axios.get('https://rickandmortyapi.com/api/character');
		res.json(response.data);
	} catch (error) {
		console.error('Error fetching characters:', error);
		res.status(500).json({ message: 'Server Error' });
	}
});

app.get('/api/characters/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
		res.json(response.data);
	} catch (error) {
		console.error(`Error fetching character with id ${id}:`, error);
		res.status(500).json({ message: 'Server Error' });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
