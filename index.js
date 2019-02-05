import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();

const PORT = 3000;

routes(app);

app.get('/', (req, res) => 
	res.send(`Kamusta Mundo!`)
);

app.listen(PORT, () => 
	console.log(`your server is running on port ${PORT}`)
);