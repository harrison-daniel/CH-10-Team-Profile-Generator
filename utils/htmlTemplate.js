const fs = require('fs');
 
const htmlTemplate = (team) =>{

   console.log('Your Team HTML file has been created!');
  
  

    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./src/style.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
      <script src="https://cdn.tailwindcss.com"></script>
      <title>Team Profile Generator</title>
    </head>

    <body>

      <!-- Header-->
      <header class="py-4 text-center">
        <h1 class="text-5xl text-white font-bold mt-0 mb-6 bg-gradient-to-r from-blue-600 to-indigo-900 p-12">My Team</h1>
      </header>

      ${team.map(answers => {
        if (answers.getRole() === "Manager"){
          return`
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">${answers.getName()}</div>
            <p class="text-gray-700 text-base">
            ${answers.getRole()}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Id: ${answers.getId()}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="mailto:${answers.getEmail()}">Email: ${answers.getEmail()}</a></span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Office Number: ${answers.getOfficeNum()}</span>
          </div>
        </div>
          `
        } else if(answers.getRole() === "Engineer"){
            return `
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">${answers.getName()}</div>
              <p class="text-gray-700 text-base">
              ${answers.getRole()}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Id: ${answers.getId()}</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="mailto:${answers.getEmail()}">Email: ${answers.getEmail()}</a></span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href= "https://github.com/${answers.getEngineerGithub()}">GitHub: ${answers.getEngineerGithub()}</a></span>
            </div>
          </div>
            `
          } else if(answers.getRole() === "Intern"){
            return`
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">${answers.getName()}</div>
              <p class="text-gray-700 text-base">
              ${answers.getRole()}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Id: ${answers.getId()}</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <a href="mailto:${answers.getEmail()}">Email: ${answers.getEmail()}</a></span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">School: ${answers.getInternSchool()}</span>
            </div>
          </div>
            `
          }
      })}

      <footer>
      </footer>

    </body>
    </html>
  `
  
 };



 module.exports = htmlTemplate;
