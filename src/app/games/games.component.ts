import { Component, OnInit } from '@angular/core';
import { GamesService } from '../start/games.service';
import { GameType } from '../start/db.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  constructor(private gamesSrv: GamesService) {}
  games: Observable<GameType[]>;
  category: string = 'ALL';
  private: string = 'ALL';
  ngOnInit(): void {
    this.games = this.gamesSrv.games;
  }

  catChange(x: string) {
    this.category = x;
  }
  pubChange(x: string) {
    this.private = x;
  }
}
