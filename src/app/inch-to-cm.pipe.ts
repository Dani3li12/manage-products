import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inchToCm'
})
export class InchToCmPipe implements PipeTransform {
  transform(value: number): unknown {
    return value * 2.54 + "cm";
  }
}