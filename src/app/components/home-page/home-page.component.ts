import { Component, OnInit } from '@angular/core';
import { InstituicoesApiModel } from 'src/app/services/instituicoes-api-model';
import { InstituicoesApiService } from 'src/app/services/instituicoes-api.service';
import { LeisApiModel } from 'src/app/services/leis-api-model';
import { LeisApiService } from 'src/app/services/leis-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  listaDeLeis: LeisApiModel[] = [];
  listaDeImgInstituicoes: Array<string> = [];
  imagemLei = 'https://www.abeforense.org.br/wp-content/uploads/2012/12/LeiMariaPenha.jpg';
  imagemAtual: string = '';

  constructor(public leisApi: LeisApiService, public instituicoesApi: InstituicoesApiService) { }

  ngOnInit(): void {
    this.leisApi.get().subscribe({
      next: (rertornoDaApi) => {
        this.listaDeLeis = rertornoDaApi;
      }
    });
    this.instituicoesApi.get().subscribe({
      next: (retornoDaApi2) => {
        this.imagemAtual = retornoDaApi2[0].imagem
        this.listaDeImgInstituicoes = retornoDaApi2.map((item: InstituicoesApiModel)=>{
          return item.imagem
        });
      }
    })
  }

  proximo(): void{
    const index = this.listaDeImgInstituicoes.indexOf(this.imagemAtual);
    if(index == this.listaDeImgInstituicoes.length -1) return
    this.imagemAtual = this.listaDeImgInstituicoes[index+1];
  }

  anterior(): void {
    const index = this.listaDeImgInstituicoes.indexOf(this.imagemAtual);
    if(index == 0) return
    this.imagemAtual = this.listaDeImgInstituicoes[index-1];
  }
}
