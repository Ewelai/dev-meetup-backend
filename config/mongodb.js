const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.DB_URI, { useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('DB Connected!')
    client.close();
});

module.exports = MongoClient;
