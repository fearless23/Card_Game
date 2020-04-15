import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { GamesService } from '../start/games.service';
import { GameType } from '../start/db.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  game$: Observable<GameType>;
  constructor(
    private activeRoute: ActivatedRoute,
    private gameSrv: GamesService
  ) {}

  ngOnInit(): void {
    this.game$ = this.activeRoute.params.pipe(
      map((params) => params['id'] as string),
      switchMap((id) => this.gameSrv.getGame(id))
    );
  }


  join(docId){

  }
}
