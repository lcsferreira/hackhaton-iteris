import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { InstituicoesPageComponent } from './components/instituicoes-page/instituicoes-page.component';
import { HttpClientModule } from '@angular/common/http';
import { InstituicaoCardComponent } from './components/instituicao-card/instituicao-card.component';
import { MatCardModule } from '@angular/material/card';
import { LeisPageComponent } from './components/leis-page/leis-page.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    MenuTemplateComponent,
    HomePageComponent,
    SobrePageComponent,
    InstituicoesPageComponent,
    InstituicaoCardComponent,
    LeisPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
