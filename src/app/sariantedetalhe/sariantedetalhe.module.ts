import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SarianteDetalheRountingModule } from './sariantedetalhe-routing.module';
import { SarianteDetalhe } from './sariantedetalhe.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SarianteDetalheRountingModule
  ],
  declarations: [SarianteDetalhe]
})
export class SarianteDetalheModule {}
