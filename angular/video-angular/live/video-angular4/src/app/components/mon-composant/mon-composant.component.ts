import {Component} from "@angular/core";
import {FormsModule} from '@angular/forms';
import {MonServiceProvider} from "../../services/mon-service.provider";
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

  public loading: boolean = false;


  constructor(private monService: MonServiceProvider){}

  rechercher() {
    this.films = new Array<Object>();
    this.error = false;
    
    if (this.recherche !== '') {
      this.loading = true;
      this.monService.rechercher(this.recherche).subscribe(
        value => this.films = value,
        error => this.error = error,
        () => this.loading = false
      );

    } else {
      this.error = true;
    }
  }

  toutAfficher() {
    this.films = new Array<Object>();
    this.error = false;
    this.loading = true;
    this.monService.rechercherToutFilms().subscribe(
      value => this.films = value,
      error => this.error = error,
      () => this.loading = false
    );
  }

}
