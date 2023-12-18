"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var URL = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(URL).then(function (res) {
    // console.log(res.data);
    var todo = res.data;
    console.log(todo.id, todo.title, todo.completed);
});
