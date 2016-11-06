import { Injectable } from '@angular/core';

let todos = [
  { title: 'Install Angular CLI', isDone: true, _id:'1' },
  { title: 'Style app', isDone: true, _id:'2' },
  { title: 'Finish service functionality', isDone: false, _id:'3' },
  { title: 'Setup API', isDone: false, _id:'4' },
];


@Injectable()
export class TodoService {

  constructor() { }

  get(query = ''){
    return new Promise(resolve => {
      let data;
      if(query === 'completed' || query === 'active'){
        let isCompleted = query === 'completed';
        data = todos.filter(todo => todo.isDone === isCompleted);
      } else {
        data = todos;
      }
      resolve(data);
    });
  }


  add(data) {
    return new Promise(resolve => {
      todos.push(data);
      resolve(data);
    });
  }

  put(data) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === data._id);
      todos[index].title = data.title;
      resolve(data);
    });
  }

  del(id) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === id);
      todos.splice(index, 1);
      resolve(true);
    });
  }

  delAll() {
    return new Promise(resolve => {
      todos= todos.filter(todo => !todo.isDone);
      resolve(todos);
    });
  }

}
