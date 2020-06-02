import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlayerTextPipe } from './player-text.pipe';



@NgModule({
  declarations: [PlayerTextPipe],
  providers: [{
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: { appearance: 'fill' }
  }],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    PlayerTextPipe,

  ]
})
export class SharedModule { }
