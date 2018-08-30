import {Component} from "@angular/core";
import {FormsModule} from '@angular/forms';
/**
 * Created by grouault on 26/08/2018.
 */

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent {

  public films: Array<Object> = new Array<Object>();
  public recherche: string = '';

  public erreur: String = '';
  public error: boolean = false;
  public errorMessage: string = 'Vous devez saisir une valeur';

  public film1: Object = {title: 'Star-wars 4', director: 'Georges Lucas', episode_id: '4'};
  public film2: Object = {title: 'Star-wars 5', director: 'Georges Lucas', episode_id: '5'};

  constructor(){}

  rechercher() {
    this.films = new Array<Object>();
    this.error = false;
    if (this.recherche !== '') {
      this.films.push(this.film1);
    } else {
      this.error = true;
    }
  }

  toutAfficher() {
    this.films = new Array<Object>();
    this.error = false;
    this.films.push(this.film1);
    this.films.push(this.film2);
  }

}
