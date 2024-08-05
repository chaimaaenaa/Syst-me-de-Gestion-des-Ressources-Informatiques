import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseUrl = 'http://localhost:8080/api/utilisateurs';

  constructor(private http: HttpClient) { }

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.baseUrl}`);
  }

  getUtilisateur(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.baseUrl}/${id}`);
  }

  createUtilisateur(utilisateur: Utilisateur): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, utilisateur);
  }

  updateUtilisateur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUtilisateur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
