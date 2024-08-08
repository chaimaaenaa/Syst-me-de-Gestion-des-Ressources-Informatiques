import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { PanneComponent } from './panne/panne.component';
import { TicketSupportComponent } from './ticket-support/ticket-support.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TechnicienDashboardComponent } from './technicien-dashboard/technicien-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    TechnicienComponent,
    EquipmentComponent,
    PanneComponent,
    TicketSupportComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    TechnicienDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
