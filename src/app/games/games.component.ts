import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  list: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor() {}

  ngOnInit(): void {}
}
