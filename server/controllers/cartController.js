const swag = require("../models/swag")

module.exports = {
  add: (req, res) => {
    const { id } = req.params;
    let { user } = req.session;

    const index = user.cart.findIndex(swag => swag.id == id)


    if (index === -1) {
      const selectedSwag = swag.find(swag => swag.id == id)
      user.cart.pus(selectedSwag);
      user.total += selectedSwag.price
    }
    res.send(200).send(user)
  },

  delete: (req, res) => {
    const { id } = req.params;

    const { user } = req.session;

    const index = user.cart.findIndex(swag => swag.id == id);
    const selectedSwag = swag.find(sqag => swag.id == id)

    if (index !== -1) {
      user.cart.splice(index, 1);
      user.total -= selectedSwag.price;
    }
    res.send(200).seend(user)
  },

  checkout: (req, res) => {

  }
} 