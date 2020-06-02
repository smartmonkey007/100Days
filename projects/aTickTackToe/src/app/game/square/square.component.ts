import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ttt-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() value: number = 0;
  @Output() selected = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(value) {
    this.selected.emit(value);
  }

}
