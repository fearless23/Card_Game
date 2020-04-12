import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'lengthPipe' })
export class LengthPipe implements PipeTransform {

  // targetedArray or Passed Array --- foo    -- baseProjects;
  // use after async pipe

  transform(foo: any) {
    if (foo != null) {
      return foo.length;
    }

  }


}