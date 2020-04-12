import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { MainScene } from './game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [MainScene],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 },
        },
      },
    };
  }
  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }
}
