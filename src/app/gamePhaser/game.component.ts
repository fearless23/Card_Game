import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { MainScene } from './game';

@Component({
  selector: 'app-game',
  template: `
    <div class="mainGameContainer">
      <div id="gameContainer"></div>
    </div>
  `,
  styleUrls: ['./game.component.css'],
})
export class GamePhaserComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 800,
      width: 1200,
      scene: [MainScene],
      parent: 'gameContainer',
      // physics: {
      //   default: 'arcade',
      //   arcade: {
      //     gravity: { y: 100 },
      //   },
      // },
    };
  }
  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }
}
