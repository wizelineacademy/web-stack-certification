const $ = (selector, element) => {
  if (element) {
    return element.querySelector(selector);
  }
  return document.querySelector(selector);
};

const menuList = $('.js-menu');
const menuItem = $('.js-menu--item');

// remove default item to fill dynamically the menu
menuList.removeChild(menuItem);

const checkForTacos = (response) => {
  if (response.status !== 200) {
    const noTacosMessage = document.createTextNode('Hubo un problema al obtener la lista de tacos :(');
    menuList.appendChild(noTacosMessage);
    return {};
  }

  return response.json();
};

const renderTacos = (tacos) => {
  Object.keys(tacos).forEach((key) => {
    const currentTaco = tacos[key];

    const newTaco = menuItem.cloneNode(true);
    const nameNode = $('.js-menu--item-name', newTaco);
    const imageNode = $('.js-menu--item-image', newTaco);
    const detailsNode = $('.js-menu--item-details', newTaco);
    const priceNode = $('.js-menu--item-price', newTaco);

    nameNode.innerHTML = currentTaco.name;
    imageNode.src = currentTaco.image;
    imageNode.alt = currentTaco.name;
    detailsNode.innerHTML = currentTaco.details;
    priceNode.innerHTML = `$${currentTaco.price}`;
    menuList.appendChild(newTaco);
  });
};

fetch('/api/taco').then(checkForTacos).then(renderTacos);
