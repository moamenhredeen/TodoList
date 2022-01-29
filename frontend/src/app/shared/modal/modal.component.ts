import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from "@angular/core";
import {TodoItem} from "../../todo-list/todo-item";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalState:boolean = false;
  @Output() state: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() save: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  public header:string='';
  public body:string='';

  public toggleModal():void{
    this.modalState = !this.modalState;
  }

  public onClose():void{
    this.state.emit(false)
  }

  public onSave():void{
    this.save.emit({id: 0,  header: this.header, body:this.body})
    this.state.emit(false)
    this.reset()
  }

  private reset():void{
    this.header = ''
    this.body = ''
  }
}
