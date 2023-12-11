// Importe le décorateur Injectable depuis le module '@angular/core'
import { Injectable } from '@angular/core';

// Importe le module HttpClient depuis '@angular/common/http'
import { HttpClient } from '@angular/common/http';

// Importe les observables et la fonction retry depuis le module 'rxjs'
import { Observable, retry } from 'rxjs';

// Décorateur Injectable indiquant qu'il peut être injecté comme dépendance
@Injectable({
    providedIn: 'root' // Indique qu'il s'agit d'un service global injectable au niveau de l'application
})
export class ExpressService {
    // URL de base de l'API Express
    private expressUrl = 'http://localhost:8081/api';

    // Constructeur du service avec injection de la dépendance HttpClient
    constructor(private http: HttpClient) { }

    // Méthode pour récupérer les tâches depuis l'API Express
    getTask(): Observable<any> {
        // Effectue une requête HTTP GET vers l'URL de l'API pour récupérer les tâches
        return this.http.get(`${this.expressUrl}/task`);
    }

    // Méthode pour appeler une route personnalisée de l'API Express avec des données
    callExpressRoute(data: any): Observable<any> {
        // Affiche dans la console les données à envoyer au back-end
        console.log(data);

        // Effectue une requête HTTP POST vers l'URL de l'API pour appeler la route 'add-task' avec les données fournies
        return this.http.post(`${this.expressUrl}/task/add-task`, data);
    }

    deleteTask(id: number): Observable<any> {
        return this.http.delete(`${this.expressUrl}/task/delete/${id}`);
      }
}
