import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sts' })
export class StringSearchPipe implements PipeTransform {

  // targetedArray or Passed Array --- foo    -- baseProjects;
  // Passed value of text           --- value     -- learn painting;

  transform(passedArray: Array<any>, value: String) {
    if (passedArray && value) {
      return passedArray.filter(item => {
        const x = value.toLowerCase();

        const name = (item.name || '').toLowerCase();
        const desc = (item.description || '').toLowerCase();

        const value_matches_name = name.indexOf(x) !== -1;
        const value_matches_desc = desc.indexOf(x) !== -1;
        return value_matches_name || value_matches_desc;
      });
    }
    return passedArray;

  }

  /*
  <input type="text" [(ngModel)]="search-term">

  <ng-container *ngFor="let project of ( projects | async | stringSearch: search-term )">

	  <div class="card-container">
		  Name: {{project.name}}<br>Description: {{project.description}} <br>Category: {{project.category}}<br>Type: {{project.type}}
	  </div>

  </ng-container>
  */


}
