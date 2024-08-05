import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs: Utilisateur[];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe(data => {
      this.utilisateurs = data;
    });
  }
}
