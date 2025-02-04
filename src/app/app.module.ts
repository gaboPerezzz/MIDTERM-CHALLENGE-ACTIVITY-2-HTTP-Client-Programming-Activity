import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  
    Ng2SearchPipeModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
