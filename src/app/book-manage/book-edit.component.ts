import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  title: string;
  stock: number;
  @Output() formChange = new EventEmitter();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      stock: new FormControl(0)
    })
  }

  addBook() {
    this.formChange.emit({ title: this.form.value.title, stock: this.form.value.stock });
    this.form.reset();
  }
}
