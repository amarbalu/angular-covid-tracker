import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(value: any, today: any): any {
    const divide=parseInt(value)/parseInt(today);
    const result=Math.round(divide*100)
    return `(${result}%)`;
  }

}