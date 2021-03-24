import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

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

  addBook(newBook: any) {
    return this.http.post(`http://localhost:3000/books/`, newBook);
  }

  updateBook(book: any, idModified: string) {
    return this.http.put(`http://localhost:3000/books/${idModified}`, book);
  }
}
