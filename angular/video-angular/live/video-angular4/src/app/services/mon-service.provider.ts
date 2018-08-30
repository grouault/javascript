/**
 * Created by augusta on 30/08/2018.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Film} from "../models/film.model";

@Injectable()
export class MonServiceProvider{

  constructor() {};

  rechercher(search: string): Observable<Array<Film>> {

    let toReturn:Observable<Array<Film>> = new Observable(observer => {
        setTimeout(()=>{
          const films = new Array<Film>();
          films.push(new Film('Star wars 4', 'Georges Lucas', '#2'));
          observer.next(films);
          observer.complete();
        }, 1000);
    });

    return toReturn;

  }

  rechercherToutFilms(): Observable<Array<Film>>{

    let toReturn:Observable<Array<Film>> = new Observable(observer => {
      setTimeout(()=>{
        const films = new Array<Film>();
        films.push(new Film('Star wars 4', 'Georges Lucas', '#4'));
        films.push(new Film('Star wars 5', 'Georges Lucas', '#5'));
        films.push({title: 'Star-wars 6', director: 'Georges Lucas', episodeId: '6'});
        observer.next(films);
        observer.complete();
      }, 1000);
    });

    return toReturn;
  }

}
