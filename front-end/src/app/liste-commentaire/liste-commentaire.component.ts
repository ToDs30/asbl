import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-liste-commentaire',
  templateUrl: './liste-commentaire.component.html',
  styleUrls: ['./liste-commentaire.component.css']
})
export class ListeCommentaireComponent {
   // Déclaration d'un tableau tasks pour stocker les tâches récupérées
   commentaires: any[] = [];

   
   // Constructeur du composant avec injection du service HttpClient
   constructor(private http: HttpClient) {}
 
   // Méthode du cycle de vie OnInit, appelée après la création du composant
   ngOnInit(): void {
     // Appel du service HttpClient pour récupérer les tâches depuis l'API
     this.http.get<any[]>('http://localhost:8081/api/commentaire/getAll')
       .subscribe(data => {
         // Transformation des données pour ajouter la propriété taskStatus à chaque tâche
         this.commentaires = data;
         console.log(this.commentaires);
       }, error => {
         console.error('Erreur lors de la récupération des tâches : ', error);
       });
   }
}
