import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RickMortyListaComponent } from '../rick-morty-lista/rick-morty-lista.component';



const routes: Routes = [
    {
        path: '',
        component: RickMortyListaComponent,
        data: {
          pageTitle: 'Rick&Morty'
        }
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickMortyRouting { }
