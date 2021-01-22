const Person = require("./person.js");

class Sam extends Person {
    constructor(name, color) {
        super(name, color);
    }
}

module.exports = Sam;