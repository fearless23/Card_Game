import { Component, OnInit, Input } from '@angular/core';
import { GameType } from '../start/db.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input('data') game: GameType;
  imgSrc: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.imgSrc = 'assets/img/' + this.game.category.toLowerCase() + '.png';
  }

  goTo(docId) {
    this.router.navigate([`game/${docId}`]);
  }
}
