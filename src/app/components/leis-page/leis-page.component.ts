import { Component, OnInit } from '@angular/core';
import { LeisApiModel } from 'src/app/services/leis-api-model';
import { LeisApiService } from 'src/app/services/leis-api.service';

@Component({
  selector: 'app-leis-page',
  templateUrl: './leis-page.component.html',
  styleUrls: ['./leis-page.component.css']
})
export class LeisPageComponent implements OnInit {
  listaDeLeis: LeisApiModel[] = [];
  displayedColumns: string[] = ['id', 'nome', 'data'];

  constructor(public leisApi: LeisApiService) { }

  ngOnInit(): void {
    this.leisApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaDeLeis = retornoDaApi;
      }
    });
  }

}
