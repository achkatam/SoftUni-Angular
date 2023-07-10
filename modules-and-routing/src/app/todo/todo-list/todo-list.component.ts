import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';   
import { GlobalLoaderService } from '../../core/global-loader/global-loader.service';
import { Todo } from '../../types/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
   
  constructor(
    private todoService: TodoService,
    private loader: GlobalLoaderService
  ) {}

  todoList: Todo[] = [];

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.loader.showLoader();

    setTimeout(() => {
      this.todoService.fetchTodos().subscribe((todos) => {
        this.todoList = todos;
        this.loader.hideLoader();
      });
    }, 1000);
  }
}
