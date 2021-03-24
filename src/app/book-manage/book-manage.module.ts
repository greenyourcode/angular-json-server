import { BookManageComponent } from './book-manage.component';
import { BookEditComponent } from './book-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActionDirective } from '../action.directive';
import { StkPipe } from '../stk.pipe';

@NgModule({
  declarations: [
    BookEditComponent,
    BookManageComponent,
    ActionDirective,
    StkPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class BookManageModule { }
