import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderManageComponent } from './order-manage.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [OrderManageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class OrderManageModule { }
