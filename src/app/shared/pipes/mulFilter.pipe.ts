import { Pipe, PipeTransform } from '@angular/core';

type EqType = '==' | '>' | '<' | '>=' | '<=';
type ValueType = string | number | boolean;

type QueryType = {
  [prop: string]: {
    eq: EqType;
    val: ValueType;
  };
};

const compare = (itemPropValue: any, val: any, eq: EqType) => {
  switch (eq) {
    case '==':
      return itemPropValue === val;
    case '>':
      return itemPropValue > val;
    case '>=':
      return itemPropValue >= val;
    case '<':
      return itemPropValue < val;
    case '<=':
      return itemPropValue <= val;

    default:
      return true;
  }
};

const final = (item: any, q: QueryType) => {
  let keep = true;
  main: for (let prop in q) {
    const { eq, val } = q[prop];
    if (val === 'ALL') {
      // Skip compare
      keep = keep && true;
    } else {
      if (item[prop] === null || item[prop] === undefined) {
        keep = false
        break main;
      }
      keep = keep && compare(item[prop], val, eq);
    }
  }
  return keep;
};

@Pipe({ name: 'mulFilter' })
export class MultiFilterPipe implements PipeTransform {
  /*

  Description                   |   Argument  |  Example
  ______________________________|_____________|_________________
  passed Array                  |   arr       |  baseProjects
  passed Obj containing props and values
  expensive than single prop filter pipe
  */

  transform(arr: Array<any>, q: any) {
    if (!arr || !q) {
      return arr;
    }
    return arr.filter((item) => final(item, q));
  }
}
