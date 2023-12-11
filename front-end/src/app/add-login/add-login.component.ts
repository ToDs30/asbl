import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpressService } from '../services/login.service';

@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.css']
})
export class AddLoginComponent {
  loginForm: FormGroup;

  // Constructeur du composant, injecte le FormBuilder et le service ExpressService
  constructor(private formBuilder: FormBuilder, private expressService: ExpressService) {
    // Initialise taskForm en utilisant le formBuilder.group() avec des champs spécifiés
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required], // Champ pour le nom d'utilisateur avec validation requise
      PasswordHash: ['', Validators.required], // Champ pour le mot de passe avec validation requise
      
    });
  }
  
  
  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    // Vérifie si le formulaire est valide
    if (this.loginForm.valid) {
      // Récupère les données du formulaire
      const formData = this.loginForm.value;
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
