import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import {LoginComponent} from "./login/login.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {TechnicienDashboardComponent} from "./technicien-dashboard/technicien-dashboard.component";

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'technicien-dashboard', component: TechnicienDashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
