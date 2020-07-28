// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor(school, name, id){
        super(name,id);
        this.school = school;
    }
}

module.exports = Intern;