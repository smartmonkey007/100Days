import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ttt-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() value = '';

  constructor() { }

  ngOnInit(): void {
  }

}
