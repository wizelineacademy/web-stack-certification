const tacos = {
    pastor: {
        price: 10,
        image: '/img/tacos/pastor.jpg',
        name: 'Tacos al Pastor',
        details: 'con piña'
    },
    camaron: {
        price: 26,
        image: '/img/tacos/camaron.jpg',
        name: 'Tacos de Camarón',
        details: 'estilo Baja California'
    },
    bisteck: {
        price: 10,
        image: '/img/tacos/bisteck.jpg',
        name: 'Tacos de Bisteck',
        details: 'de las mejores vacas'
    },
    aguacate: {
        price: 30,
        image: '/img/tacos/aguacate.jpg',
        name: 'Tacos de Aguacate',
        details: 'para el hipster'
    },
    tripa: {
        price: 12,
        image: '/img/tacos/tripa.jpg',
        name: 'Tacos de Tripa',
        details: 'bien dorada'
    },
}

const tacoModel = {
    all: () => {
        return tacos
    },
    byId: (id) => {
        return tacos[id]
    }
}

module.exports = tacoModel
