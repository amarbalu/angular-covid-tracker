import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroFilter'
})
export class ZeroFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value>0?`+${value}`:"";
  }

}