import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-page',
  templateUrl: './sobre-page.component.html',
  styleUrls: ['./sobre-page.component.css']
})
export class SobrePageComponent implements OnInit {

  public logoUrl = 'https://d2v9ipibika81v.cloudfront.net/uploads/sites/32/2016/12/GBV-woman-pt-1140-1140x450.png';
  public titulo = 'Sobre a Página';
  public descricao = 'Somos uma página de apoio a mulher. Aqui você encontrará informaçóes de instituições públicas dispostas a ajudar. Sinta-se acolhida por nós!';

  constructor() { }

  ngOnInit(): void {
  }

}
