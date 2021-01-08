import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  escolha = 'anivers';

  public folder : string;
  public sariantedetalhe : string;
  public sariantes : Array<object> =[];

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public navCtrl: NavController) {
      this.sariantes = [
        {"nome": "José da Silva Teixeira"},
        {"nome": "Luiz Carlos Garcia"},
        {"nome": "Maria Aparecida Vieira Couto"},
        {"nome": "Roberto Almeida Spoletti"},
        {"nome": "Ana Maria Cerqueira"},
        {"nome": "Pedro Arthur Nogueira Rispinni"},
        {"nome": "Francine Fonseca Pedrini"}
      ];
     }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.sariantedetalhe = this.activatedRoute.snapshot.paramMap.get('id');
  }

  abrirPagina() {
    this.router.navigateByUrl('/folder');
  }

  alterarSegment(evento: any) {
    //console.log(evento.detail.value);
    this.escolha = evento.detail.value;
  }

  abrePicker(evento: any) {
    this.router.navigateByUrl('/sariantepesquisa')
  }

  abrirItemListaSariantes(index : number) {
    //console.log("Index: " + index);
    this.router.navigateByUrl('/sariantedetalhe', {queryParams: this.sariantes[index]});
  }

}
