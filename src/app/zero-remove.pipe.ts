import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroRemove'
})
export class ZeroRemovePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value>0?value:'';
  }

}