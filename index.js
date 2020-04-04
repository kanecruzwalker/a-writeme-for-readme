// default 
const fs = require("fs");
const util = require("util");

// npm installs
const inquirer = require("inquirer");
const axios = require("axios");

// util is 
// promisify 
// fs.writeFile
const writeFile = util.promisify(fs.writeFile);

inquirer
  .prompt([
    {
        type: "input",
        name: "gitHubUserName",
        message: "What's your GitHub Username"
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"
    },
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

    return writeFile("output/readme.md", markDown)

  })
  .then(() => {
    console.log("created readme");
  })
  
// If error this procedure
.catch(error => {
        console.log("There was an error");
        process.exit(1);
  });