import { NgModule } from '@angular/core';
import { RickMortyListaComponent } from '../rick-morty-lista/rick-morty-lista.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, NgControl, FormControl, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RickMortyDetalleComponent } from '../rick-morty-detalle/rick-morty-detalle.component';
import { RickMortyRouting } from './rick-morty.routing';
import { AppComponent } from 'src/app/app.component';

@NgModule({
    declarations: [
      RickMortyDetalleComponent,
      RickMortyListaComponent,
    ],
    imports: [
        RickMortyRouting,
        CommonModule,
        AppRoutingModule,
        MDBBootstrapModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormControl,
        FormsModule

    ],
    providers: [  ],
  })
  export class RickMortyModule { }
