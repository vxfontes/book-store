const express = require('express');
const app = express();
const routes = require("./routes/routes");
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/", routes);

// configurando o servidor
app.listen(3000, () => {
    console.log('Servidor online');
});