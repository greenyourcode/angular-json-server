import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookManageComponent } from './book-manage/book-manage.component';
import { ActionDirective } from './action.directive';
import { StkPipe } from './stk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookManageComponent,
    ActionDirective,
    StkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
