import { Pipe, PipeTransform } from '@angular/core';

const check = (value) => {
  return value === 'ALL' || value === '' || value === 'ANY' || !value;
};

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(arr: Array<any>, property: string, value?: string) {
    if (!arr || check(value)) return arr;
    return arr.filter((item) => item[`${property}`] === value);
  }
}
