import express from 'express';
import bodyParser from 'body-parser';
import todosRoutes from './routes/todos';

const app = express();

app.use(bodyParser.json()); 
app.use('/todo', todosRoutes); // Use a base route for the todosRoutes

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

