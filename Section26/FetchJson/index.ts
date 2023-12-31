import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then((res) => {
  // console.log(res.data);
  const todo = res.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `The todo id: ${id},
    the title is: ${title}, 
    it's complete? ${completed}`
  );
};
