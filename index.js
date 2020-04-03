const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");

inquirer
  .prompt([
    {
        type: 'input',
        name: 'gitHubUserName',
        message: "What's your GitHub Username"
    }
  ])
  .then(answers => {
    console.log(answers.gitHubUserName);
  })
  .catch(error => {
    if(error.isTtyError) {
        console.log("There was an error");
    } 
  });

