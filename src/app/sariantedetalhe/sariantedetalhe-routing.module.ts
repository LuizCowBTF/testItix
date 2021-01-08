import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SarianteDetalhe } from './sariantedetalhe.page';

const routes: Routes = [
  {
    path: '',
    component: SarianteDetalhe
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class SarianteDetalheRountingModule {}
