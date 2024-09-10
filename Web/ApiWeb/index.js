
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

const juegos = [
{ 
  id: 1, 
  name: 'The Legend of Zelda: Breath of the Wild', 
  price: 59.99, 
  image: 'img/homefront.jpg', 
  description: 'Explora un vasto mundo abierto mientras ayudas a Link a derrotar al mal y restaurar la paz en Hyrule.', 
  genre: 'Action-Adventure' 
},
{ 
  id: 2, 
  name: 'Red Dead Redemption 2', 
  price: 49.99, 
  image: 'rdr2.jpg', 
  description: 'Vive una épica historia en el salvaje oeste, llena de aventuras y decisiones morales en un mundo abierto detallado.', 
  genre: 'Action-Adventure' 
},
{ 
  id: 3, 
  name: 'The Witcher 3: Wild Hunt', 
  price: 39.99, 
  image: 'witcher3.jpg', 
  description: 'Acompaña al cazador de monstruos Geralt de Rivia en su búsqueda épica en un mundo lleno de peligros y maravillas.', 
  genre: 'RPG' 
},
{ 
  id: 4, 
  name: 'Minecraft', 
  price: 29.99, 
  image: 'minecraft.jpg', 
  description: 'Crea y explora mundos infinitos en un juego de construcción y supervivencia que permite desatar tu creatividad.', 
  genre: 'Sandbox' 
},
{ 
  id: 5, 
  name: 'Grand Theft Auto V', 
  price: 39.99, 
  image: 'gta_v.jpg', 
  description: 'Sumérgete en el mundo del crimen con una historia épica y un vasto mundo abierto lleno de actividades.', 
  genre: 'Action-Adventure' 
},
{ 
  id: 6, 
  name: 'Fortnite', 
  price: 0.00, 
  image: 'fortnite.jpg', 
  description: 'Juego de batalla real gratuito donde puedes competir solo o con amigos para ser el último en pie.', 
  genre: 'Battle Royale' 
},
{ 
  id: 7, 
  name: 'Hades', 
  price: 24.99, 
  image: 'hades.jpg', 
  description: 'Juego de acción tipo roguelike donde juegas como el hijo de Hades intentando escapar del inframundo.', 
  genre: 'Roguelike' 
},
{ 
  id: 8, 
  name: 'The Elder Scrolls V: Skyrim', 
  price: 39.99, 
  image: 'skyrim.jpg', 
  description: 'RPG épico en un mundo abierto donde juegas como un Dovahkiin que debe salvar el mundo de los dragones.', 
  genre: 'RPG' 
},
{ 
  id: 9, 
  name: 'Super Mario Odyssey', 
  price: 59.99, 
  image: 'mario_odyssey.jpg', 
  description: 'Acompaña a Mario en su aventura alrededor del mundo para rescatar a la princesa Peach de Bowser.', 
  genre: 'Platformer' 
}
];

app.get('/', (req, res) => {
  res.send('Primera api con javascript');
});

app.get('/api/juegos', (req, res) => {
  res.send(juegos);
});

app.get('/api/juegos/:id', (req, res) => {
    const juego = juegos.find(c => c.id === parseInt(req.params.id));
    if(!juego) return res.status(404).send('juego no encontrada');
    else res.send(juego)
  });
  
const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`))