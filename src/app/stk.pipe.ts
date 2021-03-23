import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stk'
})
export class StkPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value * 100;
  }
}
