
 module.exports = templateAnswers => {
    const { employee, manager, engineer, ...intern } = templateAnswers;

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
    /head>

    <body>

      <!-- Header-->
      <header class="py-4 text-center">
        <h1 class="text-5xl text-white font-bold mt-0 mb-6 bg-gradient-to-r from-blue-600 to-indigo-900 p-12">My Team</h1>
      </header>

      <main>
      </main>

      <footer>
      </footer>

    </body>
    </html>
  `
 }
