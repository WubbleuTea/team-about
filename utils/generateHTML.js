const fs = require('fs')
const employeeArr = require('../Index')

const generateHTML = () => {
    fs.writeFile('./dist/index.html', writeHTML(), (err) => {
        if (err) throw err;
        console.log('The file has been created!');
      }); 
}

const writeHTML = () => {
    console.log(`HTML being written`);
    console.log(employeeArr)
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About the Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar sticky-top navbar-light" style="background-color: #e3f2fd;">
        <h1 class="navbar-text text-center">Our Team</h1>
    </nav>
    <div class="container">
        ${writeCards()}
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>`

}


const writeCards = () =>{
    console.log(`made it into WriteCards`)
    let html = ``;
    //If you want you can write seperate functions for whether it is a Manager, Intern, etc...or you can do `if (employee instanceof Intern){blah blah}`
    employeeArr.map(employee => {
        const { name, role, id, extraInfo, email } = employee
        html +=
         `<div class="card" style="width: 18rem;">
            <div class="card-body">
              ${name}
              ${role}
              ${id}
              ${extraInfo}
              ${email}
            </div>
        </div>`
    });    
    console.log(`I am about to return`)
    return html;
}

// const writeCards = employeeArr.map(employee => {
//     const { role, name, id, email, extraInfo } = employee
//     return `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">${name}</h5>
//           <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
//           <p class="card-text">${id}</p>
//           <a href="#" class="card-link">${email}</a>
//           <a href="#" class="card-link">${extraInfo}</a>
//         </div>`
// });



module.exports = { generateHTML };

// create HTML including 
// linking bootstrap for style 
// for each on 3 array
// join the cards together 
