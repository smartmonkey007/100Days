import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
];

@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    CommonModule,

    RouterModule.forChild(routes),
    SharedModule,

  ]
})
export class HomeModule { }
