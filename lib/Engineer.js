const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, engineerGithub) {
    super(name, id, email);

    this.engineerGithub = engineerGithub;
}
getEngineerGithub() {
  return this.engineerGithub;
}

getRole() {
  return 'Intern'
}
}


module.exports = Engineer;