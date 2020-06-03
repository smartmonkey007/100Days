import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameStates } from '../../core/game-states';

@Component({
  selector: 'ttt-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  @Output() newGame = new EventEmitter<void>();

  @Input() turn;

  constructor() { }

  ngOnInit(): void {
  }

  onNewGame() {
    this.newGame.emit();
  }

}
