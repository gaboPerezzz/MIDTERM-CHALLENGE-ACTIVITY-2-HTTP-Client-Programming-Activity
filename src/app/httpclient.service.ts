import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  constructor(private http: HttpClient) {}

  getTODOData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
