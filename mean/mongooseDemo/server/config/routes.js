const users = require("./../controllers/users");
const products = require("./../controllers/products");

module.exports = (app) => {
    app.get("/", users.index),
    app.post("/users", users.create),
    app.post("/products/:user_id", products.create)
}