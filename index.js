const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dmszk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');
        const orderCollection = client.db('geniusCar').collection('order');

        // multiple get data
        app.get('/service', async(req, res)=>{
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });

        // singale get data
        app.get('/service/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const service = await serviceCollection.findOne(query);
            res.send(service);
        })

        // POST
        app.post('/service', async(req, res)=>{
            const newService= req.body;
            const result = await serviceCollection.insertOne(newService);
            res.send(result);
        })
        
        // DELETE
        app.delete('/service/:id', async(req, res) =>{
            const id = req.params.id;
            const query ={_id: ObjectId(id)};
            const result = await orderCollection.deleteOne(query);
            res.send(result);
        })

        // order collection POST api
        app.post('/order', async(req, res)=>{
            const order = req.body;
            const result = await orderCollection.insertOne(order);
            res.send(result);
        })

        // order collection GET api and auhtor and his/her own order show
        app.get('/orders', async(req, res)=>{
            const email = req.query.email;
            // console.log(email)
            const query={email: email};
            const cursor = orderCollection.find(query);
            const orders = await cursor.toArray();
            res.send(orders);
        })

    }
    finally{

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Runing Genius server')
});

app.listen(port, () => {
    console.log('Listening to port:', port)
})