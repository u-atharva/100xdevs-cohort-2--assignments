/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todos = []
  add(todo) {
    this.todos.push(todo)
  }
  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1)
  }
  update(index, updatedTodo) {
    if (index < this.todos.length)
      this.todos[index] = updatedTodo
  }
  getAll() {
    return this.todos
  }
  get(indexOfTodo) {
    return indexOfTodo < this.todos.length ? this.todos[indexOfTodo] : null
  }
  clear() {
    this.todos.splice(0, this.todos.length)
  }
}

module.exports = Todo;
