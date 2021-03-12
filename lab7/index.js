import Express from 'express';

//defining express function and port 
const App = Express();
const port = 45030;

//array of list of names
const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

//dynamic route that will show the answer if the full name is entered
App.get('/people/:person', (req, res) => {
    let person = req.params.person;
    //if the name is in the list 
    if(names.includes(person)){
        res.json({name: person});
    }
    //if the name is not in the list
    else {
        res.json({name: "not found"});
    }
});

//dynamic route that will show any name with the character being searched
App.get('/search/:name', (req, res) => {
    const name = names.filter(str => str.includes(req.params.name));
    //if the character entered matches any of the names in the list
    if(name != 0) {
        res.json({search: [names]});
    }
    //if the character entered does not match any of the names in the list
    else {
        res.json({search: "not found"});
    }
});

//listening for the port defined
App.listen(port, () => {

});