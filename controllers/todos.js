const Todo = require("../model/todo");
// const todoUtils = require("../utils/todos");

exports.getIndex = async(req, res) => {
    // todoUtils.getCompletedTodos((completedTodos) => {
    //     todoUtils.getRemainingTodos((remainingTodos) => {
    //         Todo.fetchAll((todos) => {
    //             res.render("index", {
    //                 pageTitle: "کارهای روزمره",
    //                 todos,
    //                 completedTodos,
    //                 remainingTodos,
    //             });
    //         });
    //     });
    // });
    // Todo.count({ where: (completed = true) })
    //     .then((completedTodos) => {
    //         Todo.findAll().then((todos) => {
    //             res.render("index", {
    //                 pageTitle: "کارهای روزمره",
    //                 todos,
    //                 completedTodos,
    //                 remainingTodos: todos.length - completedTodos,
    //             });
    //         });
    //     })
    //     .catch((err) => console.log(err));

    const completedTodos = await Todo.count({ where: { completed: true } });
    const todos = await Todo.findAll();
    res.render("index", {
        pageTitle: "کارهای روزمره",
        todos,
        completedTodos,
        remainingTodos: todos.length - completedTodos,
    });
};