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
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: "What is the title of your project?"
    }
  ])
  .then(answers => {
    
    // Responses from Inquirer
    console.log(answers.gitHubUserName);
    console.log(answers.projectTitle);

        
        // Axios Api Call
        const url = `https://api.github.com/users/${answers.gitHubUserName}`;

        axios.get(url)
        .then(function (response) {
        // handle success
        console.log(response.data);    
        console.log(response.data.avatar_url);
        console.log(response.data.email);
        })

        // is this needed???
        // i feel like only 1 catch is needed 
        .catch(function (error) {
        // handle error
        console.log(error);
        })



  }).catch(error => {
    if(error.isTtyError) {
        console.log("There was an error");
    } 
  });



