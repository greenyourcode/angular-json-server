import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit, OnChanges {
  @Input() book: any;
  @Output() formChange = new EventEmitter();

  form: FormGroup;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.book?.previousValue === undefined) {
      this.form = new FormGroup({
        title: new FormControl(changes.book.currentValue.title),
        stock: new FormControl(changes.book.currentValue.stock)
      });
    }
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
    if (this.form === undefined) { // useful coz' tranclusion of app-book-edit in updateMode (createMode -> updateMode)
      this.form = new FormGroup({
        title: new FormControl(''),
        stock: new FormControl('')
      })
    }
  }

  setValue() {
    this.form.setValue({ title: 'Toto', stock: 22 });
  }

  addBook() {
    this.formChange.emit({ book: { title: this.form.value.title, stock: this.form.value.stock } });
    this.form.reset();
  }
}
