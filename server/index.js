require('dotenv').config();
const express = require('express');
const massive = require('massive');

const {getInventory, addToInventory, deleteFromInventory, editProduct} = require('./controller')

const app = express();

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance)
        console.log("Database Connected")
    }).catch(err => console.log(err))


app.use(express.json());

app.get('/api/inventory', getInventory);
app.post('/api/product', addToInventory);
app.delete('/api/inventory/:id', deleteFromInventory);
app.put('/api/inventory/:id', editProduct)

const PORT = 4000;
app.listen(PORT, () => console.log(`Running on Port: ${PORT}`));