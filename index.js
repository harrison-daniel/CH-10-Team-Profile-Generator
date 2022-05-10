const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const {buildTeam} = require('./src/pageTemplate');
const { writeFile, copyFile } = require('./utils/generatePage.js');

const team = [];


const promptManager = () => {

  console.log(`
  ============================
  Add a Manager to your team
  ============================
  `);

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is the name of your Team's Manager?",
        validate: managerNameInput => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter a name for your Team's Manager");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerId',
        message: "What is your Manager's employee id?",
        validate: managerIdInput => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("Please enter your Manager's employee id number");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is your Manager's email address?",
        validate: managerEmailInput => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("Please an email for your Team's manager");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerNum',
        message: "What is your Managers office number?",
        validate: managerNumInput => {
          if (managerNumInput) {
            return true;
          } else {
            console.log("Please enter your Manager's office number");
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'addTeammate',
        message: 'Would you like to add another teammate?',
        choices: ['Engineer', 'Intern', 'No'],
      },
    ])
    .then(answers => {
      console.log(answers);
      const managerData = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNum)
      console.log(managerData)
      team.push(managerData);
      // console.log(answers.addTeammate[0] === 'Manager')
      // if (answers.addTeammate[0] === 'Manager') {
      //   return promptManager(team);
      if (answers.addTeammate[0] === 'Engineer') {
        return promptEngineer(team);
      } else if (answers.addTeammate[0] === 'Intern') {
        return promptIntern(team);
      } else if (answers.addTeammate[0] === 'No') {
        return buildTeam();
      }
    }) 
};

// enter new teammate
const promptEngineer = () => {
  console.log(`
============================
Add an Engineer to your team
============================
`);

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "What is your Engineer's name?",
        validate: EngineerNameInput => {
          if (EngineerNameInput) {
            return true;
          } else {
            console.log('Please enter a name for your engineer');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "What is your Engineer's employee id?",
        validate: EngineerIdInput => {
          if (EngineerIdInput) {
            return true;
          } else {
            console.log('Please enter an employee id for your Engineer');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is your Engineer's email address?",
        validate: EngineerEmailInput => {
          if (EngineerEmailInput) {
            return true;
          } else {
            console.log('Please enter an email address for your Engineer');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is your Engineer's Github username?",
        validate: EngineerGithubInput => {
          if (EngineerGithubInput) {
            return true;
          } else {
            console.log('Please enter a Github username for your Engineer');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'addTeammate',
        message: 'Would you like to add another teammate?',
        choices: ['Engineer', 'Intern', 'No'],
      },
    ])
    .then(answers => {
      console.log(answers);
      const engineerData = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
      team.push(engineerData);
     if (answers.addTeammate[0] === 'Engineer') {
        return promptEngineer(team);
      } else if (answers.addTeammate[0] === 'Intern') {
        return promptIntern(team);
      } else if (answers.addTeammate[0] === 'No') {
        return buildTeam();
      }
    })
};

const promptIntern = () => {
  console.log(`
==========================
Add an Intern to your team
==========================
`);

  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'internName',
      message: "What is your Intern's name?",
      validate: internNameInput => {
        if (internNameInput) {
          return true;
        } else {
          console.log('Please enter a name for your intern');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internId',
      message: "What is your Intern's employee id?",
      validate: internIdInput => {
        if (internIdInput) {
          return true;
        } else {
          console.log('Please enter an employee id for your Intern');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is your Intern's email address?",
      validate: internEmailInput => {
        if (internEmailInput) {
          return true;
        } else {
          console.log('Please enter an email address for your Intern');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What is your Intern's school?",
      validate: internSchoolInput => {
        if (internSchoolInput) {
          return true;
        } else {
          console.log('Please enter a school for your Intern');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'addTeammate',
      message: 'Would you like to add another teammate?',
      choices: ['Engineer', 'Intern', 'No'],
    },
  ])
  .then(answers => {
    console.log(answers);
    const internData = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
    team.push(internData);
   if (answers.addTeammate[0] === 'Engineer') {
      return promptEngineer(team);
    } else if (answers.addTeammate[0] === 'Intern') {
      return promptIntern(team);
    } else if (answers.addTeammate[0] === 'No') {
      return buildTeam();
    }
  })
};


promptManager()
    .then(data => {
    console.log(data)
    })
    // .then(promptData => {
    //   return generatePage(promptData);
    // })
    // .then(siteHTML => {
    //   return writeFile(siteHTML);
    // })
    // .then(copyFileResponse => {
    //   console.log(copyFileResponse);
    //   return copyFile();
    // }) 
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  
  