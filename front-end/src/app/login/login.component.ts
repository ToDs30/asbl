// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  [x: string]: any;
  username: string = '';
  password: string = '';
 

  constructor(private authService: AuthService, private router :Router) {}

  login(): void {
    // Appeler la méthode login du service avec les identifiants
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // En cas de succès, stocker le token et gérer la suite de l'application
        this.authService.setToken(response.token);
        console.log('Connexion réussie', response);

        // Rediriger vers une page sécurisée, par exemple, la page d'accueil
        this.router.navigate(['/liste-personnes']);
      },
      (error) => {
        console.error('Échec de la connexion', error);
        // Gérer les erreurs d'authentification
      }
    );
  }

  logout(): void {
    this.authService.logout();
    // Rediriger vers la page d'accueil après la déconnexion
    this.router.navigate(['/app-index']); // Redirection vers la page d'accueil
  }
}
