const $ = (selector, element) => {
    if (element) {
        return element.querySelector(selector)
    }
    return document.querySelector(selector)
}

const checkForTacos = (response) => {
    if (response.status !== 200) {
        const noTacosMessage = document.createTextNode("There was a problem fetching tacos :(");
        menuList.appendChild(noTacosMessage)
        return {}
    }

    return response.json()
}

const renderTacos = (tacos) => {
    Object.keys(tacos).forEach(key => {
        const currentTaco = tacos[key]

        const newTaco = menuItem.cloneNode(true)
        const nameNode = $('.menu--item-name', newTaco)
        const imageNode = $('.menu--item-image', newTaco)
        const detailsNode = $('.menu--item-details', newTaco)
        const priceNode = $('.menu--item-price', newTaco)
        
        nameNode.innerHTML = currentTaco.name
        imageNode.src = currentTaco.image
        detailsNode.innerHTML = currentTaco.details
        priceNode.innerHTML = currentTaco.price
        menuList.appendChild(newTaco)
    })
}

const menuList = $('.menu--list')
const menuItem = $('.menu--item')

// remove default item to fill dynamically the menu
menuList.removeChild(menuItem)

fetch('/api/taco').then(checkForTacos).then(renderTacos)