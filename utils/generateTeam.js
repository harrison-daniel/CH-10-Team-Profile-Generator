const fs = require('fs');
const { writeFile, copyFile } = require('./writePage.js');
const htmlTemplate = require('./htmlTemplate');


generateTeam = (team) => {
  writeFile(htmlTemplate(team))
}

module.exports = generateTeam