import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SarianteDetalhe } from './sariantedetalhe/sariantedetalhe.page';
import { SariantePesquisa } from './sariantepesquisa/sariantepesquisa.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/aniversariantes',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sariantedetalhe',
    component: SarianteDetalhe
  },
  {
    path: 'sariantepesquisa',
    component: SariantePesquisa
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
