// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

import generateMarkdown from './generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'userName',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: "What is your email address?"
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
      type: 'input',
      name: 'description',
      message: "What is the description of your project?",
    },
    
    {
      type: 'input',
      name: 'installation',
      message: "How should this project be installed?",
    },
    
    {
      type: 'input',
      name: 'usage',
      message: "How should this project be used?",
    },
    
    {
        type: 'input',
        name: 'contribution',
        message: "Who contributed to this project?",
    },
    
    {
        type: 'input',
        name: 'usage',
        message: "How should this project be used?",
    },
    
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'None'],
    },

    {
        type: 'input',
        name: 'testing',
        message: "What kind of testing should be done?",
    },
    
    {
        type: 'input',
        name: 'questions',
        message: "How should users submit questions about this project?",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(data).then((answers) => {
      const readMeData = generateMarkdown(answers);
   
      
    fs.appendFile(`${fileName}`, readMeData, (err) => {
        if (err) throw err;
        console.log('Your ReadMe has been created!');
    });
});
}

// TODO: Create a function to initialize app
function init() {
    writeToFile("readMe.md",questions);
}

// Function call to initialize app
init();
