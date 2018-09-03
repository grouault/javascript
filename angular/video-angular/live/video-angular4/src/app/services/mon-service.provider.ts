/**
 * Created by augusta on 30/08/2018.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Film} from "../models/film.model";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MonServiceProvider{

  constructor(private httpClient: HttpClient) {};

  rechercher(search: string): Observable<Array<Film>> {

    let toReturn:Observable<Array<Film>> = new Observable(observer => {

        this.httpClient.get('https://swapi.co/api/films/?search=' + search)
          .subscribe(
            datas => {
              console.log('datas = ', datas);
              if (datas && datas['results']) {
                if (datas['results'].length > 0) {
                  console.log('-1-');
                  observer.next(datas['results']);
                } else {
                  console.log('-2-');
                  observer.next([]);
                }
              } else {
                observer.error('Flux incorrect : impossible de trouver le tableau \'results\']');
              }
              console.log('-3-');
              observer.complete();
              console.log('-4-');
            }
          );

        // simulation.
        /*
        setTimeout(()=>{
          const films = new Array<Film>();
          films.push(new Film('Star wars 4', 'Georges Lucas', '#2'));
          observer.next(films);
          observer.complete();
        }, 1000);
        */

    });

    return toReturn;

  }

  rechercherToutFilms(): Observable<Array<Film>>{

    let toReturn:Observable<Array<Film>> = new Observable(observer => {

      this.httpClient.get('https://swapi.co/api/films/')
        .subscribe(
          datas => {
            console.log('datas = ', datas);
            if (datas && datas['results']) {
              observer.next(datas['results']);
            } else {
              observer.error('Aucun film trouvé!');
            }
            observer.complete();
          }
        );

      /*
      setTimeout(()=>{
        const films = new Array<Film>();
        films.push(new Film('Star wars 4', 'Georges Lucas', '#4'));
        films.push(new Film('Star wars 5', 'Georges Lucas', '#5'));
        films.push({title: 'Star-wars 6', director: 'Georges Lucas', episodeId: '6'});
        observer.next(films);
        observer.complete();
      }, 1000);
      */

    });

    return toReturn;
  }

}
