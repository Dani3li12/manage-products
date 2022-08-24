import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  givenStr:string=""
  transform(value: any, extension:string=" cool!"): string {
    this.givenStr = value.split('').reverse().join('');
    return this.givenStr+extension ;
  }
}
