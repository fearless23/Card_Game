import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GamesService } from '../start/games.service';
import { GameType } from '../start/db.types';
import { UserService, User } from '../services/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

/*
  name: string;  --
  category: string; --
  private: boolean; --
  password?:string; --if private
  maxPlayers: number; // Based on GamCategory
  playersJoined: number; // Based on join ... UPDAte
  joinAble: boolean; // Calculated
  docId: string; // automatic
  id: number;
  players: {
    name: string; // username or selfGiven --
    idx: string;  // 0 for newGame
    admin: boolean; // true for newGame
  }[];
*/

type GameData = {
  gameName: string;
  category: string;
  private: 'true' | 'false';
  password?: string;
  userName?: string;
};

const stringValidator = Validators.compose([
  Validators.minLength(3),
  Validators.maxLength(30),
]);

const reqStringValidator = Validators.compose([
  Validators.minLength(3),
  Validators.maxLength(30),
]);

const g = {
  userName: [null, reqStringValidator],
  gameName: [null, reqStringValidator],
  category: [null, Validators.required],
  private: ['false', Validators.required],
  password: [null, stringValidator],
};

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
})
export class NewGameComponent implements OnInit {
  newGame: FormGroup;
  userName: string;
  user$: Observable<User>;
  formState: string = 'READY';
  latestGameId: string;
  err: string;
  constructor(
    private fb: FormBuilder,
    private gameSrv: GamesService,
    private userSrv: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newGame = this.fb.group(g);
    this.user$ = this.userSrv.user$;
    this.user$.subscribe((user) => {
      if (user) {
        this.userName = user.displayName;
        this.newGame.removeControl('userName');
      }
    });
  }

  async addGame(gameData: GameData) {
    this.formState = 'SUBMIT';
    const { gameName, userName, ...rest } = gameData;
    const p = gameData['private'] === 'false';
    const game: GameType = {
      ...rest,
      private: p ? false : true,
      name: gameName,
      maxPlayers: 4,
      playersJoined: 1,
      joinAble: true,
      docId: '0',
      id: 0,
      players: [
        {
          name: this.userName ? this.userName : userName,
          idx: 0,
          admin: true,
        },
      ],
      timeCreated: Date.now(),
    };

    try {
      this.latestGameId = await this.gameSrv.addGame(game);
      this.formState = 'SUCCESS';
    } catch (error) {
      this.err = error;
      this.formState = 'ERROR';
    }
  }

  addMoreGame() {
    this.newGame.reset({
      userName: null,
      gameName: null,
      category: null,
      private: 'false',
      password: null,
    });
    if (this.userName) {
      this.newGame.removeControl('userName');
    }
    this.formState = 'READY';
  }

  viewGame() {
    this.router.navigate([`/game/${this.latestGameId}`]);
  }
}
