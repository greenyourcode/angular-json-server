import { EditionMode } from './book.enum';
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
  bookUpdating: any;
  editionMode: EditionMode = EditionMode.Create;
  EditionMode = EditionMode;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.refreshBook();
  }

  createEditionModeHandle() {
    this.editionMode = EditionMode.Create;
  }

  refreshBook() {
    this.bookService.getBookList().subscribe((res) => {
      this.books = res;
    });
  }

  getFormOnChange(data: any, idModified: string) {
    this.editBook(data?.book, idModified);
  }

  editBook(book: any, idModified: string) {
    if (this.editionMode === EditionMode.Create) {
      const newBook = {
        id: uuidv4(),
        title: book.title,
        stock: book.stock,
      };
      this.bookService.addBook(newBook).pipe(
        switchMap(_ => this.bookService.getBookList()),
      ).subscribe(res => this.books = res);
    } else if (this.editionMode === EditionMode.Update) {
      this.bookService.updateBook(book, idModified).pipe(
        switchMap(_ => this.bookService.getBookList()),
      ).subscribe(res => this.books = res);
    }
  }

  delete(book: any) {
    this.bookService.deleteBookById(book.id).pipe(
      switchMap(_ => this.bookService.getBookList()),
    ).subscribe(res => this.books = res);
  }

  // async delete(book: any) {
  //   const res = await this.bookService.deleteBookById(book.id).toPromise();
  //   if (res) {
  //     this.refreshBook();
  //   }
  // }

  update(book: any) {
    this.editionMode = EditionMode.Update;
    this.bookUpdating = book;
  }
}
