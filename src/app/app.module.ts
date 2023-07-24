import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormioModule, Formio } from '@formio/angular';
import { InOutFormComponent } from './in-out-form/in-out-form.component';
import bootstrap4 from '@formio/bootstrap/bootstrap4';
(Formio as any).use(bootstrap4);

@NgModule({
  declarations: [
    AppComponent,
    InOutFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
