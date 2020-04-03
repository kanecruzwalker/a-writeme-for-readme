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
    return axios.get(url)

  })
        // Axios Data Response
  .then(response => {

    const avatarURL = response.data.avatar_url;
    const userName = response.data.login;

    const markDown = `![${userName} avatar](${avatarURL})`

    console.log(markDown);

    console.log(response.data);    
    console.log(response.data.email);
    
  })

// If error this procedure
.catch(error => {
    if(error.isTtyError) {
        console.log("There was an error");
    } 
  });