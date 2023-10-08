const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());





app.get('/', (req, res) => {
    res.send('Hero is running');
})
app.get('/kobir', (req, res) => {
    res.send('kobir is running');
})

app.listen(port, () => {
    console.log(`EHero  server is running port: ${port}` )
})