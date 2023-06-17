const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const fruits= {item1: "mango", item2:"banana", item3:"orange", item4:"licchi"}
    res.send(fruits);
});

const fruits= ['mango', 'banana', 'orange', 'licchi', 'jack-fruit'];
app.get('/fruits/:item', (req, res) => {
    const item= req.params.item;
    const fruit= fruits[item];
    res.send({name:fruit, id:item})
});


//post
app.post('/addFruits', (req, res) => {
    //save to database
    res.send(req.body);
})

app.listen(4000, () => console.log('listenting to port 4000'));