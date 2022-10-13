// link to page creation
const generateHTML = require('./lib/generateHTML');

// team profiles
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee')

// node modules 
const fs = require('fs');
const inquirer = require('inquirer');

// Members Array
const membersArray = [];