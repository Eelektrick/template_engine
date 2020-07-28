// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee{
    constructor (name, id, email, gitHubUser){
        super(name, id, email);
        this.github = gitHubUser;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github
    }
}

module.exports = Engineer;