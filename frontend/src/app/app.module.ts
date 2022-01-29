import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {ModalComponent} from "./shared/modal/modal.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TodoItemDetailsComponent } from './todo-list/todo-item-details/todo-item-details.component';
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ActivityBarComponent } from './activity-bar/activity-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ModalComponent,
    TodoItemDetailsComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ActivityBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home', component:HomePageComponent},
      {path:'todo-list', component:TodoListComponent},
      {path:'todo-item/:id', component:TodoItemDetailsComponent},
      {path:'', redirectTo: 'home', pathMatch:'full'},
      {path:'**', component:PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
