import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  currentSection: string = 'equipments';

  equipments = [
    { id: 1, name: 'Équipement A' },
    { id: 2, name: 'Équipement B' }
  ];

  failures = [
    { id: 1, description: 'Panne A' },
    { id: 2, description: 'Panne B' }
  ];

  tickets = [
    { id: 1, subject: 'Ticket A' },
    { id: 2, subject: 'Ticket B' }
  ];

  showSection(section: string): void {
    this.currentSection = section;
  }

  addItem(type: string): void {
    // Logic to add item
    console.log(`Add ${type}`);
  }

  editItem(type: string, id: number): void {
    // Logic to edit item
    console.log(`Edit ${type} with ID ${id}`);
  }

  deleteItem(type: string, id: number): void {
    // Logic to delete item
    console.log(`Delete ${type} with ID ${id}`);
  }
}
