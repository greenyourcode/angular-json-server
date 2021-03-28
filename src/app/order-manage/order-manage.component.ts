import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.scss']
})
export class OrderManageComponent {
  interval = 0;
  subscription: any;
  state: string = 'inactive';

  constructor() { }

  start() {
    this.subscription = interval(10).pipe(
      takeWhile(() => this.state !== 'active'),
      tap(() => {
        if (this.interval === 4000) {
          this.state = 'active';
        }
      })
    ).subscribe((x) => this.interval = x);
  }
}
