import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => 
	res.send(`Kamusta Mundo!`)
);

app.listen(PORT, () => 
	console.log(`your server is running on port ${PORT}`)
);