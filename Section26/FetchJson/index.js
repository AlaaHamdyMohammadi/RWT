"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var URL = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(URL).then(function (res) {
    // console.log(res.data);
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("The todo id: ".concat(id, ",\n    the title is: ").concat(title, ", \n    it's complete? ").concat(completed));
};
