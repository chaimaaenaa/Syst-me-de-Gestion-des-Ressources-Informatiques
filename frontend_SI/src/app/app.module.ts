import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { PanneComponent } from './panne/panne.component';
import { TicketSupportComponent } from './ticket-support/ticket-support.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    TechnicienComponent,
    EquipmentComponent,
    PanneComponent,
    TicketSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
