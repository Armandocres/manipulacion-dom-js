const URL = 'https://platzi-avo.vercel.app/api/avo';
const appNode = document.querySelector('#app');

const formatPrice = (price) => {

  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
  }).format(price)

  return newPrice;
}

//web api
window.fetch(URL)
  .then(response => response.json()) //procesa la informacion y la convierte en json
  .then(responseJson => {
    const ollNods = [];
    responseJson.data.forEach(item => {
      //crear imagen, titulo y precio
      const img = document.createElement('img');
      img.src = `https://platzi-avo.vercel.app/${item.image}`;
      img.className = 'h-22 w-22 md:h-24 md:w-24 rounded-full mx-auto ms:mx-0 ms:mr-6'
      const title = document.createElement('h2');
      title.textContent = item.name;
      title.className = 'text-lg';
      const price = document.createElement('div');
      price.textContent = formatPrice(item.price);
      price.className = 'text-gray-600';
      
      const container = document.createElement('div');
      //agregar al DOM
      container.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300'
      container.append(img, title, price);

      ollNods.push(container);
    });

    appNode.append(...ollNods);
  }) // renderiza info browser