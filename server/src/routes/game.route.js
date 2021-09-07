// Package Modules
const router = require("express").Router();

// Custom Modules
const GameCtrl = require("../controllers/game.controller");

// Create A Game
router.post("/create", GameCtrl.create);

// Join A Game
router.post("/join", GameCtrl.join);

// Get All Games
router.get("/all", GameCtrl.getAll);

// Watch a Game - Not implemented -- Eniola
// router.post('/watch', GameCtrl.addSpectator)

// End Game - Not Implemented -- AfricanDev
// router.post("/end", GameCtrl.endGame)

// Resign  - Not implemented -- Ace Anyanwu
// router.post('/resign', GameCtrl.resign)

// Get Game By Id - Not implemented -- Moses Odunosho
// router.get("/:id", GameCtrl.getById);

// Get All Games by User - not implemented -- shauib mustapha
// router.get("/all/:userId", GameCtrl.getAllByUser);

// Export Module
module.exports = router;