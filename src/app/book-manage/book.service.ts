import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookList(): Observable<any> {
    return this.http.get('http://localhost:3000/books').pipe(
      filter(_ => !!_)
    );
  }

  deleteBookById(id: number) {
    return this.http.delete(`http://localhost:3000/books/${id}`);
  }
}
