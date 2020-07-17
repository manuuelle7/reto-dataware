import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RickMortyListaComponent } from './rick-morty.module/rick-morty-lista/rick-morty-lista.component';


const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./rick-morty.module/service/rick-morty.module').then(m => m.RickMortyModule),
    component: RickMortyListaComponent,
    data: {
      pageTitle: 'Rick & Morty'
    }
  },
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
