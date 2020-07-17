import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PersonajeInfoModel } from '../model/personajeInfo.model';
import { LocacionInfoModel } from '../model/locacionInfo.model';


@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private url = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) { }

  public obtieneListaPersonajes(): Promise<any> {
    return this.http.get<any>(this.url.concat('character'), {withCredentials: false}).toPromise();
  }
  public obtieneListaEpisodios(): Promise<any> {
    return this.http.get<any>(this.url.concat('episode'), {withCredentials: false}).toPromise();
  }
  public obtieneListalocaciones(): Promise<any> {
    return this.http.get<any>(this.url.concat('location'), {withCredentials: false}).toPromise();
  }


  public obtieneListaPersonajesPorPagina(pagina: string): Promise<PersonajeInfoModel> {
    return this.http.get<PersonajeInfoModel>( pagina ).toPromise();
  }
  public obtieneLocacionPorUrl(url: string): Promise<LocacionInfoModel> {
    return this.http.get<LocacionInfoModel>( url ).toPromise();
  }

}
