import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { SelectComponent } from './components/html-components/select-component/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
