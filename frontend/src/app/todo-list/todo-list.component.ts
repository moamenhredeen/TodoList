import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {TodoListService} from "./todo-list.service";
import {TodoItem} from "./todo-item";
import {Subscription} from "rxjs";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.copmonent.html',
  styleUrls: ['./todo-list.component.scss']
})
// um die lifecycle hooks zu verwenden muss die komponente die entsprechenden
// interfaces implementieren.
export class TodoListComponent implements OnInit, OnChanges, OnDestroy{
  private _todos:TodoItem[] = [];
  private _todosSub!:Subscription;
  private _modalVisibility:boolean = false;
  public searchKeyword:string='';

  constructor(
    private todoListService:TodoListService){}

  ngOnDestroy(): void {
    this._todosSub.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
    this._todosSub = this.todoListService
      .getTodoItems()
      .subscribe({
        next: todos =>  this._todos = todos,
        error: err => console.log(err)
      });
  }

  public get filteredTodos(): TodoItem[]{
    if(this.searchKeyword.trim() === ''){
      return this._todos;
    }
    return this._todos.filter(el => el.header.toLowerCase().includes(this.searchKeyword));
  }


  public toggleModal():void{
    console.log("something")
    this._modalVisibility = !this._modalVisibility;
  }

  get modalVisibility(): boolean{
    return this._modalVisibility
  }

  public syncModalState(state:boolean){
    this._modalVisibility = state;
  }

  public onSaveHandler(todoItem:TodoItem):void{
    this._todos.push(todoItem)
  }
}
