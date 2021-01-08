import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-sariantedetalhe',
  templateUrl: './sariantedetalhe.page.html',
  styleUrls: ['./sariantedetalhe.page.scss'],
})
export class SarianteDetalhe {

  public sariantedetalhe: string;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.sariantedetalhe = this.activatedRoute.snapshot.paramMap.get('id');
  }

  voltarPagina(evento: any) {
    this.router.navigateByUrl('');
  }
}
