const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateEngineer = require('./src/Engineer')
const generateManager = require('./src/Manager')
const generateIntern = require('./src/Intern')

const Inquirer = require("Inquirer");
const fs = require('fs');
const path = require('path');

//const teamMember = [];
//const ids = [];