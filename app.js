const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//save inforrmation from choices made for new team members
let totalMembers = [];

//variable used to place id's inside and verify they are unique
let usedID = {};


// See which level the new team member is
function NewTeamMember(){
    console.log("Lets build your team!");
    return inquirer.prompt([
        {
            type:"input",
            name:"Employee",
            message:"What is this team members role?",
            choices:["Manager", "Engineer", "Intern", "Team is completed"] 
        }
    ])
    //switch and case depending on the option they choose of which team member
    .then(input =>{
        switch(input.Employee){
            case "Manager":
                NewManager();
                break;
            case "Engineer":
                NewEngineer();
                break;
            case "Intern":
                NewIntern();
                break;
            case "Team is completed":
                render(totalMembers);
                createHtml();
        }
    }) 
}

//function to add new manager
function NewManager(){
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is your new team managers name?",
            validate: Empty
        },
        {
            type:"input",
            name:"id",
            message:"What is their employee id?",
            validate: checkID
        },
        {
            type:"input",
            name:"email",
            message:"What is your new team managers email?",
            validate: NeedEmail
        },
        {
            type:"input",
            name:"officeNumber",
            message:"What is your new team managers office Number?",
            validate: Empty
        },
    ])
}

//function to add new engineer
function NewEngineer(){
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is your new Engineers name?",
            validate: Empty
        },
        {
            type:"input",
            name:"id",
            message:"What is their employee id?",
            validate: checkID
        },
        {
            type:"input",
            name:"email",
            message:"What is your new Engineers email?",
            validate: NeedEmail
        },
        {
            type:"input",
            name:"github",
            message:"What is your new Engineers github?",
            validate: Empty
        },
    ])
}

//function to add a new intern
function NewIntern(){
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is your new Interns name?",
            validate: Empty
        },
        {
            type:"input",
            name:"id",
            message:"What is their employee id?",
            validate: checkID
        },
        {
            type:"input",
            name:"email",
            message:"What is your new Interns email?",
            validate: NeedEmail
        },
        {
            type:"input",
            name:"school",
            message:"What is your new Interns School?",
            validate: Empty
        },
    ])
}

//verification of information for each team member
//make sure they are entering information asked
function Empty(input){
    if(input===""){
        return "Please enter information asked";
    }
    else{
        return true;
    }
}

//print the information to the html inside the output file
function createHtml(){

}

//run new team member function to enter team information
NewTeamMember();