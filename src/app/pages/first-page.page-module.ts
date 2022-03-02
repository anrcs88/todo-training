import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstPagePage } from './first-page.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: FirstPagePage,
        }
      ])],
  	declarations: [FirstPagePage],
  	providers: [],
  	exports: [] })
export class FirstPagePageModule {
}
