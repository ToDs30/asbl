// Importe le décorateur Injectable et les classes nécessaires depuis Angular Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

// Déclare le service comme injectable au niveau de l'application
@Injectable({
  providedIn: 'root',
})
export class ExpressService {
  // Déclare l'URL de l'API Express à utiliser
  private expressUrl = 'http://localhost:8081/api';

  // Injecte le service HttpClient nécessaire pour effectuer des requêtes HTTP
  constructor(private http: HttpClient) {}

  // Définit une méthode pour récupérer les bénéficiaires depuis l'API
  getLogin(): Observable<any> {
    return this.http.get(`${this.expressUrl}/login`);
  }

  // Définit une méthode pour appeler une route personnalisée de l'API Express avec des données
  callExpressRoute(data: any): Observable<any> {
    console.log(data); // Affiche les données dans la console (à des fins de débogage)

    // Effectue une requête POST vers l'API Express avec les données fournies
    return this.http.post(`${this.expressUrl}/login/add-login`, data);
  }

 
}
