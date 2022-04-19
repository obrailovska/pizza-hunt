// This file will import all of the API routes to prefix their endpoint names and package them up.

const router = require("express").Router();
const pizzaRoutes = require("./pizza-routes");
const commentRoutes = require("./comment-routes");

router.use("/comments", commentRoutes);
router.use("/pizzas", pizzaRoutes);
// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use("/pizzas", pizzaRoutes);

module.exports = router;
