import {Injectable} from "@angular/core";
import {TodoItem} from "./todo-item";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn:'root'
})
export class TodoListService{
  private readonly API_URL = 'http://localhost:3000/todo'
  private todos = [
    {id:0, header:"something", body:"something else"}
  ]

  constructor(private http:HttpClient) {}

  public getTodoItems(): Observable<TodoItem[]>{
    return this.http
      .get<TodoItem[]>(this.API_URL);
  }

  public getTodoItemById(id:number): Observable<TodoItem[]>{
    return this.http
      .get<TodoItem[]>(`${this.API_URL}/${id}`);
  }

}
