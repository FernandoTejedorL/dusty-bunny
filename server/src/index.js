const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const corsOptions = {
  origin: '*', // Orígenes permitidos (cuando esté en un dominio real, lo cambiaremos por ese dominio)
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
};

app.use(cors(corsOptions));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
