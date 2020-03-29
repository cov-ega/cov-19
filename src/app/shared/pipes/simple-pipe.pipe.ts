import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simplePipe'
})
export class SimplePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
