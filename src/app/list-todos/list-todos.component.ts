import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {
  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message: string;
  todos = [

    // new Todo(1, 'Learn Chess', false, new Date()),
    // new Todo(2, 'Learn Angular', false, new Date()),
    // new Todo(3, 'Learn scala', false, new Date())

  ];

  // todo = {
  //   id: 1,
  //   description: 'Learn something'
  // }

  constructor(private todoDataService: TodoDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.refreshTodos();
  }

  private refreshTodos() {
    this.todoDataService.retrieveAllTodos('stefan').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo('ion', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    console.log(`update  ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
