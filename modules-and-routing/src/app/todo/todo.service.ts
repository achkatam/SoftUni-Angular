import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';  
import { Todo } from '../types/Todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  fetchTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
