import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-sariantepesquisa',
  templateUrl: './sariantepesquisa.page.html',
  styleUrls: ['./sariantepesquisa.page.scss'],
})
export class SariantePesquisa {

  public sariantepesquisa: string;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.sariantepesquisa = this.activatedRoute.snapshot.paramMap.get('id');
  }

  voltarPagina($event) {
    this.router.navigateByUrl('');
  }

}
