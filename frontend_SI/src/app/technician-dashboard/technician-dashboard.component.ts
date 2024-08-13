import { Component } from '@angular/core';

@Component({
  selector: 'app-technician-dashboard',
  templateUrl: './technician-dashboard.component.html',
  styleUrls: ['./technician-dashboard.component.css']
})
export class TechnicianDashboardComponent {
  currentSection: string = 'tickets';

  tickets = [
    { id: 1, subject: 'Problème avec l\'imprimante', status: 'En attente' },
    { id: 2, subject: 'Erreur de connexion réseau', status: 'En cours' },
    { id: 3, subject: 'Bogue dans le logiciel', status: 'Résolu' }
  ];

  showSection(section: string): void {
    this.currentSection = section;
  }



  updateStatus(ticketId: number, event: Event): void {
    const target : HTMLSelectElement = event.target as HTMLSelectElement;
    const newStatus =target.value;
    console.log(`Update ticket ${ticketId} to status ${newStatus}`);
  }


  viewDetails(ticketId: number): void {
    console.log(`View details for ticket ${ticketId}`);
  }

  protected readonly HTMLSelectElement = HTMLSelectElement;
  value: any;
  as: any;
}
