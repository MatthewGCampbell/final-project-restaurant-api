import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

// resource routers
import chefRoutes from './routes/chefRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import comboRoutes from './routes/comboRoutes.js';
import authRouter from './routes/authRoutes.js';
import drinkRoutes from './routes/drinkRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// universal middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

// You had this: const specs = YAML.load('./docs/openapi.yaml');
const specs = YAML.load('./public/bundled.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// routes
app.use('/api/chef', chefRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/combo', comboRoutes);
app.use('/api/auth', authRouter);
app.use('/api/drink', drinkRoutes);

// error handling
// (1) invalid destination route 
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// (2) thrown errors or internal backend error
app.use((err, req, res, next) => {
  if (!err.status) {
    err.status = 500;
    err.message = 'Internal Server Error';
  }
  console.log(err.stack);
  res.status(err.status).json({ error: err.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

