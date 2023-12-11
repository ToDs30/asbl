import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://localhost:8081/api';
    private tokenKey = 'authToken'; // Clé pour stocker le token dans le localStorage

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<any> {
        // Appel du backend pour la connexion
        return this.http.post(`${this.apiUrl}/auth/login`, { UserName: username, PasswordHash: password });
    }

    // Méthode pour stocker le token dans le localStorage
    setToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
    }

    // Méthode pour récupérer le token
    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    // Méthode pour vérifier si l'utilisateur est connecté
    isLoggedIn(): boolean {
        // Vérifier si le token existe dans le localStorage
        return !!this.getToken();
    }

    // Méthode pour déconnecter l'utilisateur
    logout(): void {
        // Supprimer le token du localStorage lors de la déconnexion
        localStorage.removeItem(this.tokenKey);
    }
    
}
