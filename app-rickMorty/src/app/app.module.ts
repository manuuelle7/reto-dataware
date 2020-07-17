import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RickMortyListaComponent } from './rick-morty.module/rick-morty-lista/rick-morty-lista.component';
import { RickMortyDetalleComponent } from './rick-morty.module/rick-morty-detalle/rick-morty-detalle.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RickMortyListaComponent,
    RickMortyDetalleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
