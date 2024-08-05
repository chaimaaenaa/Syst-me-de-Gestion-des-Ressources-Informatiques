import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { PanneComponent } from './panne/panne.component';
import { TicketSupportComponent } from './ticket-support/ticket-support.component';

const routes: Routes = [
  { path: 'utilisateurs', component: UtilisateurComponent },
  { path: 'techniciens', component: TechnicienComponent },
  { path: 'equipments', component: EquipmentComponent },
  { path: 'pannes', component: PanneComponent },
  { path: 'tickets', component: TicketSupportComponent },
  { path: '', redirectTo: '/utilisateurs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
