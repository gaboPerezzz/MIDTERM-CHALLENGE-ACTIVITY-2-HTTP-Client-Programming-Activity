import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../httpclient.service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  searchText: string = '';

  constructor(private http: HttpclientService) {}

  ngOnInit(): void {
    this.http.getTODOData().subscribe((data: any) => {
      this.todos = data;
    });
  }

  get filteredTodos() {
    return this.todos.filter(todo => 
      todo.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
