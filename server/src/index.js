const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const fluffsRoutes = require('./routes/fluffs.routes');
const usersRoutes = require('./routes/users.routes');
const ordersRoutes = require('./routes/orders.routes');
const queriesRoutes = require('./routes/queries.routes');
require('dotenv').config();

const corsOptions = {
  origin: '*', // Orígenes permitidos (cuando esté en un dominio real, lo cambiaremos por ese dominio)
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/fluffs', fluffsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/queries', queriesRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Database Connected');
  } catch (error) {
    console.log('Connection Error', error);
  }
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

startServer();
