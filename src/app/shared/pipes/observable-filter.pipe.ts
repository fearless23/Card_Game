import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Pipe({ name: 'obs' })
export class ObservableFilterPipe implements PipeTransform {

  // targetedArray or Passed Array ( Observable ) --- foo    -- baseProjects;
  // Item in array has a property   --- property  -- title;
  // Passed value of text           --- value     -- learn painting;

  transform(foo: Observable<any>, property: String, value?: String) {
    if (foo && value) {
      return foo.pipe(map(x =>
        x.filter(item => item[`${property}`] === value)
      ));
    }  // sometimes a property like description is not defined then use ( item[`${property}`] || '' ) === value
    return foo;
  }
  /*
    How to Use==

    <select [(ngModel)]="foo">
      <option value=''>All</option>
      <option value="base">Base</option>
      <option value="personal">Personal</option>
      <option value="pro">Pro</option>
      <option value="social">Social</option>
    </select>

    <ng-container *ngFor="let project of ( projects | obs: 'category': foo | async )">

      <div class="card-container">
        Name: {{project.name}}<br>Description: {{project.description}} <br>Category: {{project.category}}<br>Type: {{project.type}}
      </div>
    </ng-container>

  */

}
