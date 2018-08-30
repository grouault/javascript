import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonComposantComponent } from './components/mon-composant/mon-composant.component'
import {FormsModule} from "@angular/forms";
import {MonServiceProvider} from "./services/mon-service.provider";

@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MonServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
