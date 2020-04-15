import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games-filter-bar',
  templateUrl: './games-filter-bar.component.html',
  styleUrls: ['./games-filter-bar.component.css'],
})
export class GamesFilterBarComponent {
  @Output() catChangeEvt = new EventEmitter<string>();
  @Output() pubChangeEvt = new EventEmitter<string>();

  catChange(x: string) {
    this.catChangeEvt.emit(x);
  }
  pubChange(x: string) {
    this.pubChangeEvt.emit(x);
  }
}
