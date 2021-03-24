import { OrderManageComponent } from './order-manage/order-manage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManageComponent } from './book-manage/book-manage.component';

const routes: Routes = [
  { path: 'order-manage', component: OrderManageComponent },
  { path: 'book-manage', component: BookManageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
