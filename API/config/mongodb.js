const mongodb = require('mongodb');
require('dotenv').config();

const mongodbClient = mongodb.MongoClient;

var connectedClient;

exports.connect = ()=>{
    mongodbClient.connect(process.env.MONGODB_URL)
        .then((client)=>{
            connectedClient=client;
            console.log("DB Connected..");
        })
        .catch(err=>{console.log(err)});
}

exports.getCollection = (nameOfCollection)=>{
    return connectedClient.db('restaurantDB').collection(nameOfCollection);
}