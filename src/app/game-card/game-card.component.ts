import { Component, OnInit, Input } from '@angular/core';
import { GameType } from '../start/db.types';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input('data') game: GameType;
  constructor() {}

  ngOnInit(): void {}
}
