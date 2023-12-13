import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpressService } from '../services/commentaire.service';
@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css']
})
export class AddCommentaireComponent {
// Déclare une variable taskForm de type FormGroup pour représenter le formulaire
commentaireForm: FormGroup;

// Constructeur du composant, injecte le FormBuilder et le service ExpressService
constructor(private formBuilder: FormBuilder, private expressService: ExpressService) {
  // Initialise taskForm en utilisant le formBuilder.group() avec des champs spécifiés
  this.commentaireForm = this.formBuilder.group({
    Nom: ['', Validators.required], // Champ pour le nom de la tâche avec validation requise
    Prenom: ['', Validators.required], // Champ pour la description de la tâche avec validation requise
    Date_COM: ['', Validators.required], // Champ pour la date limite de la tâche avec validation requise
    Sujet: ['', Validators.required],
    Descrip: ['', Validators.required],
  });
}


// Méthode appelée lors de la soumission du formulaire
onSubmit() {
  // Vérifie si le formulaire est valide
  if (this.commentaireForm.valid) {
    // Récupère les données du formulaire
    const formData = this.commentaireForm.value;
    console.log('Données à envoyer au back-end : ', formData);

    // Appelle la route du back-end via le service ExpressService
    this.expressService.callExpressRoute(formData).subscribe({
      // Fonction de rappel pour la gestion de la réponse réussie
      next: response => {
        console.log('Réponse du back-end : ', response);
        this.commentaireForm.reset();
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
