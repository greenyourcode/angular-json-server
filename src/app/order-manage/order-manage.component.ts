import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ])
  ]
})
export class OrderManageComponent {
  interval = 0;
  subscription: any;
  isOpen = true;
  state: string = 'inactive';

  constructor() { }

  start() {
    this.subscription = interval(10).pipe(
      takeWhile(() => this.state !== 'active'),
      tap(() => {
        if (this.interval === 400) {
          this.state = 'active';
          this.isOpen = false;
        }
      })
    ).subscribe((x) => this.interval = x);
  }
}
