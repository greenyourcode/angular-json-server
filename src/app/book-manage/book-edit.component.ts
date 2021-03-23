import { EditionMode } from './book.enum';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnChanges {
  @Input() book: any;
  @Output() formChange = new EventEmitter();

  form: FormGroup;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.book?.currentValue?.title !== changes.book?.previousValue?.title) {
      this.form?.patchValue({
        title: changes.book.currentValue.title
      })
    }
    if (changes.book?.currentValue?.stock !== changes.book?.previousValue?.stock) {
      this.form?.patchValue({
        stock: changes.book.currentValue.stock
      })
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      stock: new FormControl(0)
    })
  }

  addBook() {
    this.formChange.emit({ book: {title: this.form.value.title, stock: this.form.value.stock }});
    this.form.reset();
  }
}
