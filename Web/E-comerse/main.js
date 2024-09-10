fetch('http://localhost/api/juegos')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const resultadosDiv = document.getElementById('resultados');
    
    // URL de la imagen predeterminada
    const defaultImage = 'https://via.placeholder.com/150'; // Cambia esto a la URL de tu imagen predeterminada

    data.forEach(juego => {
      // Crear el contenedor de la tarjeta
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.backgroundImage = `url(${juego.image})`;
      // Crear el contenido de la tarjeta
      const cardContent = document.createElement('div');
      cardContent.classList.add('card__content');

      // Crear los textos
      const title = document.createElement('p');
      title.classList.add('card__title');
      title.textContent = juego.name;

      const description = document.createElement('p');
      description.classList.add('card__description');
      description.textContent = juego.description;

      const genre = document.createElement('p');
      genre.classList.add('card__genre');
      genre.textContent = juego.genre;

      const price = document.createElement('p');
      price.classList.add('card__price');
      price.textContent = juego.price;

      // Crear el botón
      const button = document.createElement('button');
      button.classList.add('card_button');
  
      // Añadir los elementos al contenedor de la tarjeta
      cardContent.appendChild(title);
      cardContent.appendChild(description);
      cardContent.appendChild(genre);
      cardContent.appendChild(price);
      cardContent.appendChild(button);

      card.appendChild(cardContent);

      // Añadir la tarjeta al contenedor de resultados
      resultadosDiv.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error:', error.message);
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `<p>Error al cargar los datos: ${error.message}</p>`;
  });
