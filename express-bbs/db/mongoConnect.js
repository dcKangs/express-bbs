const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:junsan@cluster0-1dynr.mongodb.net/test?retryWrites=true";

module.exports = () => {
    const connect = () => {
        mongoose.connect(uri, {dbName : 'test', useNewUrlParser : true}, (err) => {
            if(err) {
                console.log('connection error to mongodb');
            } else {
                console.log('connection ok to mongodb')
            }
        });
    };
    
    connect();
    
    mongoose.connection.on('err', (err) => {
        console.error('connection error..');
    });
    mongoose.connection.on('disconnected', () => {
        console.error('disconnected.. try to reconnect');
        connect();
    });
    
    //require('../schemas/article');
}