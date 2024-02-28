
import express from 'express';
import * as url from 'url';
// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import 'dotenv/config';
import hbs from 'hbs';
const app = express()
const port = process.env.PORT;



// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estático
app.use(express.static('public'))

// app.get('/', (request, response) => {
//   response.send('Home page');
// });


app.get('/', (request, response) => {
  response.render('home', {
    nombre: 'Joseph Chain',
    titulo: 'Curso de Node'
  });
});

// app.get('/index', (request, response) => {
//   response.sendFile(__dirname + '/public/index.html');
// });

app.get('/generic', (request, response) => {
  // response.sendFile(__dirname + '/public/generic.html');
  response.render('generic', {
    nombre: 'Joseph Chain',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (request, response) => {
  // response.sendFile(__dirname + '/public/elements.html');
  response.render('elements', {
    nombre: 'Joseph Chain',
    titulo: 'Curso de Node'
  });
});


app.get('*', (request, response) => {
  response.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
