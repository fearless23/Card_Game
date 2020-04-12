import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-alerts></app-alerts>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
