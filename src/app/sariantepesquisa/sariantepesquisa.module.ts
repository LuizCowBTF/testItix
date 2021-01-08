import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SariantePesquisaRoutingModule } from './sariantepesquisa-routing.module';
import { SariantePesquisa } from './sariantepesquisa.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SariantePesquisaRoutingModule
  ],
  declarations: [SariantePesquisa]
})
export class SarianteDetalheModule {}
