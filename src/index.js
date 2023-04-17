const URL = 'https://platzi-avo.vercel.app/api/avo';

//web api
window.fetch(URL)
  .then(response => response.json()) //procesa la informacion y la convierte en json
  .then(responseJson => {
    const ollNods = [];
    responseJson.data.forEach(item => {
      //crear imagen, titulo y precio
      const img = document.createElement('img');
      const title = document.createElement('h2');
      const price = document.createElement('div');
      
      const container = document.createElement('div');
      //agregar al DOM
      container.append(img, title, price);

      ollNods.push(container);
    });

    document.body.append(...ollNods);
  }) // renderiza info browser