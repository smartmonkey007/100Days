import { Pipe, PipeTransform } from '@angular/core';
import { GameLogicService } from '../core/game-logic.service';

@Pipe({
  name: 'playerText'
})
export class PlayerTextPipe implements PipeTransform {

  constructor(private gls: GameLogicService) { }

  transform(value: number, ...args: unknown[]): unknown {
    return this.gls.getPlayerText(value);
  }

}
