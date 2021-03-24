import { OrderManageModule } from './order-manage/order-manage.module';
import { BookManageModule } from './book-manage/book-manage.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionDirective } from './action.directive';
import { StkPipe } from './stk.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BookManageModule,
    OrderManageModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
