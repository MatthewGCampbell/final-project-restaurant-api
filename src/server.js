import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// resource routers
import chefRouter from './routes/chefRoutes.js';
import itemRouter from './routes/itemRoutes.js';
import comboRouter from './routes/comboRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// universal middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

// routes
app.use('/api/chef', chefRouter);
app.use('/api/item', itemRouter);
app.use('/api/combo', comboRouter);

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

