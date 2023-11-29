// Importe le décorateur Component du module '@angular/core'
import { Component } from '@angular/core';

// Importe FormBuilder, FormGroup et Validators du module '@angular/forms'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importe ExpressService depuis le service task.service
import { ExpressService } from '../services/task.service';

// Définit le composant Angular avec le sélecteur 'app-add-task'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

// Déclare la classe du composant AddTaskComponent
export class AddTaskComponent {
  // Déclare une variable taskForm de type FormGroup pour représenter le formulaire
  taskForm: FormGroup;

  // Constructeur du composant, injecte le FormBuilder et le service ExpressService
  constructor(private formBuilder: FormBuilder, private expressService: ExpressService) {
    // Initialise taskForm en utilisant le formBuilder.group() avec des champs spécifiés
    this.taskForm = this.formBuilder.group({
      TaskName: ['', Validators.required], // Champ pour le nom de la tâche avec validation requise
      Description: ['', Validators.required], // Champ pour la description de la tâche avec validation requise
      Deadline: ['', Validators.required], // Champ pour la date limite de la tâche avec validation requise
    });
  }
  

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    // Vérifie si le formulaire est valide
    if (this.taskForm.valid) {
      // Récupère les données du formulaire
      const formData = this.taskForm.value;
      console.log('Données à envoyer au back-end : ', formData);

      // Appelle la route du back-end via le service ExpressService
      this.expressService.callExpressRoute(formData).subscribe({
        // Fonction de rappel pour la gestion de la réponse réussie
        next: response => {
          console.log('Réponse du back-end : ', response);
        },
        // Fonction de rappel pour la gestion des erreurs
        error: err => {
          console.log('Erreur lors de l\'envoi des données au back-end :', err)
        }
      });
    } else {
      // Affiche un message dans la console si le formulaire est invalide
      console.log('Le formulaire est invalide');
    }
  }
}
