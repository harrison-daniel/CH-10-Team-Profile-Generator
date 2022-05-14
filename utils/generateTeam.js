const fs = require('fs');
const { writeFile, copyFile } = require('./generatePage.js');
const htmlTemplate = require('../src/htmlTemplate');


generateTeam = (team) => {
  writeFile(htmlTemplate(team))
}

module.exports = generateTeam