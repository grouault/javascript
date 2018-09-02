import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router'

// component
import { AppComponent } from './app.component';
import { MonComposantComponent } from './components/mon-composant/mon-composant.component'

// providders
import {MonServiceProvider} from "./services/mon-service.provider";
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: '', redirectTo: 'recherche', pathMatch: 'full'},
  {path: 'recherche', component: MonComposantComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MonServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
