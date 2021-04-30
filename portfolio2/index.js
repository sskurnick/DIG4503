import MongoCLient from 'mongodb';

//credentials for mongodb
const URL = "mongodb+srv://sskurnick:ltCDX9ibSbRx5O4x@cluster0.oewwc.mongodb.net/test";

const chalk = require('chalk');

MongoCLient.connect(URL, { useUnifiedTopology: true})
.then(connection => {
    //create and define database variable as sample supplies data
    let database = connection.db("sample_supplies");

    //create and define collection variable as sales data
    let collection = database.collection("sales");

    //create and define cursor variable to filter through data
    let cursor = collection.find({storeLocation: {$eq: "Denver"}, purchaseMethod: {$eq: "Online"}, couponUsed: {$eq: "true"}});

    cursor.forEach(document => {
        console.log(document.name);
    }, () => {
        connection.close();
    })
})
.catch(error => {
    console.log(chalk.red("Error: " + error));
})
