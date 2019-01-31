import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id : 1, description: 'Learn Chess'},
    {id : 2, description: 'Learn Angular'},
    {id : 3, description: 'Learn Scala'}
  ]

  // todo = {
  //   id: 1,
  //   description: 'Learn something'
  // }

    constructor() { }

  ngOnInit() {
  }

}
