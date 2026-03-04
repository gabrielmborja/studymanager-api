import express from 'express';
import userRoutes from './routes/user.routes.js'; 
import courseRoutes from './routes/course.routes.js'; 
import enrollmentRoutes from './routes/enrollment.routes.js'; 

const app = express();

app.use(express.json());

// Rotas da API
app.use(userRoutes);
app.use(courseRoutes);
app.use(enrollmentRoutes);

// Rota de teste simples
app.get('/', (req, res) => {
  res.json({ status: 'API Online' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`> Servidor rodando em http://localhost:${PORT}`);
});