// Importation du module HttpClient depuis Angular Common HTTP
import { HttpClient } from '@angular/common/http';

// Importation des modules Component et OnInit depuis Angular Core
import { Component, OnInit } from '@angular/core';

// Définition du composant Angular avec le sélecteur 'app-task-list'
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  // Déclaration d'un tableau tasks pour stocker les tâches récupérées
  tasks: any[] = [];

  // Variable pour stocker l'index de la ligne sélectionnée
  selectedRowIndex: number | null = null;

  // Constructeur du composant avec injection du service HttpClient
  constructor(private http: HttpClient) {}

  // Méthode du cycle de vie OnInit, appelée après la création du composant
  ngOnInit(): void {
    // Appel du service HttpClient pour récupérer les tâches depuis l'API
    this.http.get<any[]>('http://localhost:8081/api/task/getAll')
      .subscribe(data => {
        // Transformation des données pour ajouter la propriété taskStatus à chaque tâche
        this.tasks = data.map(task => ({ ...task, taskStatus: false }));
        console.log(this.tasks);
      }, error => {
        console.error('Erreur lors de la récupération des tâches : ', error);
      });
  }

  // Méthode appelée lorsqu'on clique sur le bouton "Effectuer" d'une tâche
  effectuerClick(index: number): void {
    // Inversion du statut taskStatus de la tâche
    this.tasks[index].taskStatus = !this.tasks[index].taskStatus;
    
    // Mise à jour de l'index de la ligne sélectionnée
    this.selectedRowIndex = index;
  }
}
