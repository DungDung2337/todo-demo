const { fake } = require("faker");
const faker = require("faker");
const fs = require("fs");

faker.locale = "en";

const randomTodoList = (n) => {
  if (n <= 0) return [];
  const totoList = [];
  Array.from(new Array(n)).forEach(() => {
    const todo = {
      id: faker.random.uuid(),
      name: faker.lorem.words(),
      completed: faker.random.boolean(),
      status: "todo",
      isActive: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    totoList.push(todo);
  });
  return totoList;
};

(() => {
  // random data

  const todoList = randomTodoList(15);

  const db = {
    todo: todoList,
    users: [],
  };

  // write db object to bd.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully");
  });
})();
