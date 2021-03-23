import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss']
})
export class BookManageComponent implements OnInit {
  books: [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.refreshBook();
  }

  refreshBook() {
    this.bookService.getBookList().subscribe((res) => {
      this.books = res;
    });
  }

  // async delete(book: any) {
  //   const res = await this.bookService.deleteBookById(book.id).toPromise();
  //   if (res) {
  //     this.refreshBook();
  //   }
  // }

  delete(book: any) {
    this.bookService.deleteBookById(book.id).pipe(
      switchMap(_ => this.bookService.getBookList()),
    ).subscribe(res => this.books = res);
  }

}
