import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianNumber'
})
export class IndianNumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toLocaleString('en-IN');
  }

}
