import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ttt-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() board = [];
  @Output() play = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(currentValue, index) {
    this.play.emit(index);
  }

}
