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
  public errorMessage: string = '';

  public isMessage: boolean = false;
  public message: string = '';

  public loading: boolean = false;

  constructor(private monService: MonServiceProvider){}

  rechercher() {

    this.films = new Array<Object>();
    this.error = false;

    if (this.recherche !== '') {
      this.error = false;
      this.loading = true;
      this.clearMessage();
      console.log('composant-before');
      this.monService.rechercher(this.recherche).subscribe(
        datas => {
          console.log('[recherche] - [subscribe] - datas = ', datas);
          if (datas && datas.length == 0) {
            this.showMessage('Aucun film n\'a été trouvé.');
          } else {
            console.log('datas = ', datas);
            this.films = datas;
          }

        },
        error => {
          console.log('[recherche] - [subscribe] - end');
          this.error = true;
          this.errorMessage = error;
        },
        () => {
          console.log('[recherche] - [subscribe] - end');
          this.loading = false;
        }
      )
      console.log('composant-after');

    } else {
      this.showMessage('Vous devez saisir au moins deux caractères');
    }
  }

  toutAfficher() {
    this.films = new Array<Object>();
    this.error = false;
    this.loading = true;
    this.clearMessage();
    this.monService.rechercherToutFilms().subscribe(
      datas => {

        if (datas && datas.length == 0) {
          this.showMessage('Aucun film n\'a été trouvé.');
        } else {
          console.log('value = ', datas);
          this.films = datas;
        }

      },
      error => {
        this.error = true,
          this.errorMessage = error
      },
      () => this.loading = false
    );
  }

  showMessage(message: string) {
    console.log('[showMessage] - message = ', message);
    this.isMessage = true;
    this.message = message;
  }

  clearMessage() {
    this.isMessage = false;
    this.message = '';
  }

}
