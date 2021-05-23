const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const create = require('./lib/generate-team')
teamMembers = [];
//const ids = [];
createTeam();

function createTeam() {
    console.log('Create your team')

    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the manager?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the ID of the manager?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email of the manager'
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: 'What is the phone number of the manager'
        }

    ])

    .then(function (managerInfo) {
        const manager = new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.managerNumber);
        teamMembers.push(manager);

        addMember();


        function addMember() {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'addEmployee',
                    message: 'Would you like to add a new team member',
                    choices: [
                        'Intern',
                        'Engineer',
                        'No'
                    ]
                }
            ])

            .then(function (employeeType) {
                if(employeeType.addEmployee === "Intern") {

                internInfo();

                function internInfo() {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'internName',
                            message: 'What is the name of the intern?'
                        },
                        {
                            type: 'input',
                            name: 'internId',
                            message: 'What is the ID of the intern?'
                        },
                        {
                            type: 'input',
                            name: 'internEmail',
                            message: 'What is the email of the intern?'
                        },
                        {
                            type: 'input',
                            name: 'internSchool',
                            message: 'What school did the intern go to?'
                        }
                    ])
                        .then(function(internAnswers){
                            const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool);
                            teamMembers.push(intern);
                            addMember();
                    })
            }
        } else if(employeeType.addEmployee === "Engineer") {

            engineerInfo();

            function engineerInfo() {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'engineerName',
                        message: 'What is the name of the engineer?'
                    },
                    {
                        type: 'input',
                        name: 'engineerId',
                        message: 'What is the ID of the engineer?'
                    },
                    {
                        type: 'input',
                        name: 'engineerEmail',
                        message: 'What is the email of the engineer?'
                    },
                    {
                        type: 'input',
                        name: 'engineerGithub',
                        message: 'What is the GitHub username of the engineer?'
                    }
                ])
                    .then(function(engineerAnswers){
                        const engineer= new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub);
                        teamMembers.push(engineer);
                        addMember();
                })
            }
        } else {
            create;
        }
    })
}

    })
}
