import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeePage } from './homee.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomeePage,
        }
      ])],
  	declarations: [HomeePage],
  	providers: [],
  	exports: [] })
export class HomeePageModule {
}
