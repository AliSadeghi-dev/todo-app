const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.post("/add-todo", adminController.addTodo);
router.get("/delete-todo/:id", adminController.deleteTodo);
router.get("/complete-todo/:id", adminController.compeletedTodo);

module.exports = router;