//==============
// Archivo server.js
// Aplicación Express para manejar el formulario de animal favorito
//==============

//Importar módulos necesarios
//para crear un servidor web con Express, manejar rutas y servir archivos estáticos. 
//También se utiliza 'path' para trabajar con rutas de archivos y 'fileURLToPath' 
//para obtener la ruta del archivo actual.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

//Configuración necesaria para obtener la ruta del directorio actual,
//lo cual es útil para servir archivos estáticos y trabajar corectamente
//con rutas en el proyecto.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Inicialización principal de la aplicación Express y configuración del
//puerto en el que se ejecutará el servidor. 
const app = express();
const PORT = 3000;

//=============
// Configuración de middlewares 
//=============

//Middleware utilizado para analizar los datos enviados a través de formularios HTML.
app.use(express.urlencoded({ extended: true }));

//Middleware para interpretar los datos enviados en formato JSON,
//lo cual es útil si se envían datos desde el cliente en formato JSON.
app.use(express.json());

//Configuración de carpeta 'public' para servir archivos estáticos como HTML,
//CSS y JavaScript.
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal - mostrar formulario
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//=============
// Ruta principal
//=============

//Ruta para manejar el envío del formulario. Cuando el usuario envía su animal favorito,
//se captura el valor del campo 'animal' y se redirige al usuario a la página de resultado, 
//pasando el animal favorito como un parámetro en la URL.
app.post('/animal', (req, res) => {
  const animalFavorito = req.body.animal;
  res.redirect(`/resultado?animal=${encodeURIComponent(animalFavorito)}`);
});

//=============
// Vista de resultado
//=============

//Esta ruta muestra la segunda página (resultado.html) que muestra el animal favorito del usuario.
app.get('/resultado', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'resultado.html'));
});

//=============
//Inicio del servidor
//=============

//Inicia el servidor en el puerto especificado y muestra un mensaje en la consola indicando que el 
//servidor está corriendo.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});