import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss']
})
export class BookManageComponent implements OnInit {
  books: [];
  title: string;
  stock: number;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.refreshBook();
  }

  refreshBook() {
    this.bookService.getBookList().subscribe((res) => {
      this.books = res;
    });
  }

  getFormOnChange(book: any) {
    this.addBook(book);
  }

  // async delete(book: any) {
  //   const res = await this.bookService.deleteBookById(book.id).toPromise();
  //   if (res) {
  //     this.refreshBook();
  //   }
  // }

  addBook(book: any) {
    const newBook = {
      id: uuidv4(),
      title: book.title,
      stock: book.stock
    };
    this.bookService.addBook(newBook).pipe(
      switchMap(_ => this.bookService.getBookList()),
    ).subscribe(res => this.books = res);
  }

  delete(book: any) {
    this.bookService.deleteBookById(book.id).pipe(
      switchMap(_ => this.bookService.getBookList()),
    ).subscribe(res => this.books = res);
  }

}
