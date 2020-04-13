import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {

  /*

  Description                   |   Argument  |  Example
  ______________________________|_____________|_________________
  passed Array                  |   arr       |  baseProjects
  Item in array has a property  |   property  |  category
  Passed value of text          |   value     |  learn

  */

  transform(arr: Array<any>, property: string, value?: string) {
    if (arr && value) {
      if (value === 'ALL' || value==='') { return arr; }
      return arr.filter(item => item[`${property}`] === value);
    }
    return arr;
  }


}
