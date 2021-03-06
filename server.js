const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();

//partials directory
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//helper function
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

//middlewares
// app.use((req, res, next) => {
//     var now = new Date().toString();
//     var log = `${now}: ${req.method} ${req.url}`;
//     console.log(log);
//     fs.appendFile('server.log', log +  '\n');
//     next();
// });
// app.use((req, res, next) => {
//     res.render('maintenance.hbs', {
//         maintenanceMessage:'Sorry, we are doing some maintenance',
//         pageTitle: 'Maintenance Mode'
//     });
// });
// app.use(express.static(__dirname + '/public'));


//app routes
app.get('/', (req, res) => {
    res.render('home', {
        welcomeMessage:'Hello, This is the home page',
        pageTitle: 'The Home Page Title'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        welcomeMessage:'Hello, This the about page',
        pageTitle: 'The About Page Title'
    });
});

app.get('/project', (req, res) => {
    res.render('project.hbs', {
        welcomeMessage:'Hello, This the project page',
        pageTitle: 'The Project Page Title'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'An error occur.'
    });
} );

app.listen(port, () => {
    console.log(`Server is up and running in port ${port}`);
});
