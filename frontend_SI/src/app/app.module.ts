import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TechnicianDashboardComponent } from './technician-dashboard/technician-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './register/registration.component';
import { PanneListComponent } from './PanneC/panne-list/panne-list.component';
import { PanneFormComponent } from './PanneC/panne-form/panne-form.component';
import { PanneSearchComponent } from './PanneC/panne-search/panne-search.component';
import { PanneDetailComponent } from './PanneC/panne-detail/panne-detail.component';
import { PanneEquipmentListComponent } from './PanneC/panne-equipment/panne-equipment-list.component';
import { TicketListComponent } from './TicketC/ticket-list/ticket-list.component';
import { CreateTicketComponent } from './TicketC/create-ticket/create-ticket.component';
import { AdminTicketsComponent } from './TicketC/admin-tickets/admin-tickets.component';
import { TechnicienTicketsComponent } from './TicketC/technicien-tickets/technicien-tickets.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { EquipmentFormComponent } from './EquipmentC/equipment-form/equipment-form.component';
import { EquipmentListComponent } from './EquipmentC/equipment-list/equipment-list.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {AdminUsersComponent} from "./admin-users/admin-users.component";
import {AdminAccountsComponent} from "./admin-accounts/admin-accounts.component";
import {MatIconModule} from "@angular/material/icon";

library.add(faFacebook, faTwitter, faInstagram, faLinkedin);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    TechnicianDashboardComponent,
    LoginComponent,
    RegistrationComponent,
    EquipmentListComponent,
    EquipmentFormComponent,
    PanneListComponent,
    PanneFormComponent,
    PanneSearchComponent,
    PanneDetailComponent,
    PanneEquipmentListComponent,
    TicketListComponent,
    CreateTicketComponent,
    AdminTicketsComponent,
    TechnicienTicketsComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    AdminAccountsComponent,
    AdminUsersComponent,
    EditUserComponent
  ],
  imports: [
    MatIconModule,
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
