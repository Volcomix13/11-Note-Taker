const express = require('express');
const api = require('./routes/api-routes.js');
const html = require('./routes/html-routes.js');

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//routes
app.use("/api", api);
app.use("/", html);

app.listen(PORT, () =>
    console.log(`App listenint at http://localhost:${PORT}`)
);


