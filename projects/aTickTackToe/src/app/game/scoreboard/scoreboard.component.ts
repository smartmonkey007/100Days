import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ttt-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  @Input() player = 0;
  @Input() history = [] as { player: string, wins: number }[];
  constructor() { }

  ngOnInit(): void {
  }

}
