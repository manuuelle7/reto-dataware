import { RickMortyService } from '../service/rick-morty.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { InfoModel } from '../model/info.model';
import { PersonajeInfoModel } from '../model/personajeInfo.model';
import { EpisodioInfoModel } from '../model/episodioInfo.model';
import { LocacionInfoModel } from '../model/locacionInfo.model';
import { PersonajeModel } from '../model/personaje.model';
import { RickMortyDetalleComponent } from '../rick-morty-detalle/rick-morty-detalle.component';

@Component({
  selector: 'app-rick-morty-lista',
  templateUrl: './rick-morty-lista.component.html',
  styleUrls: ['./rick-morty-lista.component.scss']
})
export class RickMortyListaComponent implements OnInit {
  @ViewChild(RickMortyDetalleComponent) modalDetalle;

  public personaje: PersonajeModel = {};
  public paginaActual = 1;
  public paginaDefault = 'https://rickandmortyapi.com/api/character/?page=1';
  public nombrePersonaje: string;

  public personajesLista: PersonajeInfoModel = {
    info: {},
    results: []
  };
  public episodiosLista: EpisodioInfoModel = {
    info: {},
    results: []
  };
  public locacionesLista: LocacionInfoModel = {
    info: {},
    results: []
  };

  public auxPersonajesLista: PersonajeModel[] = [];
  public filtroBusquedaPersonajes: PersonajeModel = {};

  constructor( private rickMortyService: RickMortyService ) { }

  ngOnInit(): void {
    // console.log('Busca info de la primer página');
    this.cargarPersonajesPorPagina( this.paginaDefault );
  }

  /**
   * Método para obtener los personajes por página
   * @param urlPagina url de la pagina
   */
  cargarPersonajesPorPagina( urlPagina: string): void {
    this.rickMortyService.obtieneListaPersonajesPorPagina( urlPagina ).then( personajes => {
      this.personajesLista = personajes;
      this.auxPersonajesLista = personajes.results;
      // Actualiza el número de página
      if (personajes.info.next) {
        this.paginaActual = Number(personajes.info.next.substring(
          personajes.info.next.lastIndexOf('page=') + 5, personajes.info.next.length)) - 1 ;
      } else {
        this.paginaActual = personajes.info.pages;
      }
      console.log(this.personajesLista);
    }, err => {
      console.log('Algo salió mal :(');
      console.log(err);
    });
  }

  /**
   * Método para abrir el modal con el detalle del personaje
   * @param personaje objeto de tipo PersonajeModel
   */
  detallePersonaje(personaje: PersonajeModel): void  {
    this.personaje = personaje;
    this.modalDetalle.modal.show();
  }

 /**
  * Método para buscar por nombre de personaje en la página
  */
  buscaPorNombre(): void {
    console.log(this.nombrePersonaje);
    this.auxPersonajesLista = this.personajesLista.results.filter(per =>
       per.name.toLowerCase().search(this.nombrePersonaje.toLowerCase()) !== -1);
    // console.log(this.auxPersonajesLista);
  }

  /**
   * Método para ir a página inicial
   */
  pagInicial(): void {
    if (!this.personajesLista.results) {
      return;
    }
    this.cargarPersonajesPorPagina(this.paginaDefault);
  }

  /**
   * Método para ir a página anterior
   */
  pagAnterior(): void {
    if (!this.personajesLista.results) {
      return;
    }
    this.cargarPersonajesPorPagina(this.personajesLista.info.prev);
  }

  /**
   * Método para a página siguiente
   */
  pagSiguiente(): void {
    this.cargarPersonajesPorPagina(this.personajesLista.info.next);
  }



  /** -------------DEPRECATED---------------------
   * Método para obtener los personajes
   * @param pagina variable de tipo number
   */
  cargarInformacion(): void {
    this.rickMortyService.obtieneListaPersonajes().then( personajes => {
      this.personajesLista = personajes;
      // console.log(this.personajesLista);
    }, err => {
      console.log('Algo salió mal :(');
      console.log(err);
    }).then(() => {
      this.rickMortyService.obtieneListaEpisodios().then( episodios => {
        this.episodiosLista = episodios;
        console.log(this.episodiosLista);
      }, err => {
        console.log('Algo salió mal :(');
        console.log(err);
      });
    }).then(() => {
      this.rickMortyService.obtieneListalocaciones().then( locaciones => {
        this.locacionesLista = locaciones;
        // console.log(this.locacionesLista);
      }, err => {
        console.log('Algo salió mal :(');
        console.log(err);
      });
    });
  }
}
