const orders = []

const orderModel = {
    all: () => {
        return orders
    },
    byId: (id) => {
        return orders[id]
    },
    save: (order) => {
        orders.push(order)
        return orders.length - 1
    },
    update: (id, order) => {
        if (orders.length > id) {
            orders[id] = order
            return true
        }
        return false
    },
    delete: (id, order) => {
        if (orders.length > id) {
            orders.splice(id, 1)
            return true
        }
        return false
    }
}

module.exports = orderModel
