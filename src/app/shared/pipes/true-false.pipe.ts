import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bool' })
export class TrueFalsePipe implements PipeTransform {

  // targetedArray or Passed Array  --- foo    -- tasks;
  // Item in array has a property   --- property  -- isDone;
  // Passed value of text           --- value     -- empty, true, false;

  transform(foo: any, property: String, value?: String) {
    if (foo && value) {
      switch (value) {
        case 'any':
          return foo;
        case 'true':
          return foo.filter(item => item[`${property}`]);
        case 'false':
          return foo.filter(item => !item[`${property}`]);
      }
    }
    return foo;
  }

}
