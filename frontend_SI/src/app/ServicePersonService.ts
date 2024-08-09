import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicePersonService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  // Enregistrement d'un utilisateur
  register(nom: string, prenom: string, email: string, motDePasse: string, username: string, type: string): Observable<any> {
    const body = { nom, prenom, email, motDePasse, username, type };
    return this.http.post(`${this.apiUrl}/register`, body);
  }
  // Connexion d'un utilisateur

  login(email: string, motDePasse: string, type: string): Observable<any> {
    const body = { email, motDePasse, type };  // Include type in request body
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  // Mise à jour des informations d'un utilisateur
  updatePersonne(id: number, email: string, motDePasse: string, role: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, { email, motDePasse, role }).pipe(
      catchError(this.handleError)
    );
  }

  // Suppression d'un utilisateur
  deletePersonne(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Récupération du profil de l'utilisateur connecté
  getUserProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/profile`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // Gestion des erreurs
  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
}
