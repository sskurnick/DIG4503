//defining Express
const Express = require("express");
//setting App equal to Express
const App = Express();
//setting the port the code will run on
const port = 3001;

//get method to call on the response
App.get('/', function(request, response){
    response.send("Hello World!");
});

//use method to set the directory
App.use('/public', Express.static("public"));

//listen method that will console log a message when the code runs
App.listen(port, function(){
    console.log("Server running!");
})