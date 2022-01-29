import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {TodoItem} from "../todo-item";
import {TodoListService} from "../todo-list.service";
import {Parser} from "@angular/compiler";

@Component({
  templateUrl: './todo-item-details.component.html',
  styleUrls: ['./todo-item-details.component.scss']
})
export class TodoItemDetailsComponent implements OnInit, OnDestroy {

  private sub!:Subscription;
  private httpSub!:Subscription;
  private _todoItem:TodoItem | undefined;

  constructor(private route:ActivatedRoute,
              private todoListService:TodoListService) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap
      // .pipe()
      .subscribe(
      params => {
        let id = params.get('id');
        if(id !== null) {
          this.httpSub = this.todoListService.getTodoItemById(+id).subscribe({
            next: res => this._todoItem = res[0]
          })
        }
      }
    );
  }

  public get todoItem(){
    return this._todoItem;
  }

  ngOnDestroy() {
    this.httpSub.unsubscribe()
    this.sub.unsubscribe()
  }

}
