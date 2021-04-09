import MongoClient from 'mongodb';

//credentials for mongodb
const URL = "mongodb+srv://sskurnick:ltCDX9ibSbRx5O4x@cluster0.oewwc.mongodb.net/test";

MongoClient.connect(URL, { useUnifiedTopology: true})
.then(connection => {
    //create and define database variable as sample airbnb data
    let database = connection.db("sample_airbnb");

    //create and define collection variable as listingsAndReviews data
    let collecton = database.collection("listingsAndReviews");

    //create and define cursor variable to filter through data
    let cursor = collecton.find({"review_scores.review_scores_rating": {$gte: 99}, beds: {$gte: 5}, price: {$lte: 200}});

    cursor.forEach(document => {
        console.log(document.name);
    }, () => {
        connection.close();
    })
})
.catch(error => {
    console.log("Error: " + error);
})