import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpressService } from '../services/personne.service';

@Component({
  selector: 'app-add-personnes',
  templateUrl: './add-personnes.component.html',
  styleUrls: ['./add-personnes.component.css']
})
export class AddPersonnesComponent {
personnesForm: FormGroup;
selectedRevenus: string = '';

constructor(private formBuilder: FormBuilder, private expressService: ExpressService){
  this.personnesForm = this.formBuilder.group({
    Nom: ['',Validators.required],
    Prenom: ['',Validators.required],
    Date_de_naissance: ['',Validators.required],
    Rue: ['',Validators.required],
    Numero: ['',Validators.required],
    Code_Postal: ['', Validators.required],
    Commune: ['', Validators.required],
    Revenus: ['', Validators.required],
    Handicape: [false],
      Femme: [false],
      Immigres: [false],
      Sans_Abris: [false],
      Sans_Papier: [false],
      Bebe_0_6_Mois: [false],
      Bebe_6_24_Mois: [false],
      Enfants_2_14_Ans: [false],
      Ados_14_18_Ans: [false],
      J_Adulte_18_24_Ans: [false],
      Adultes_25_64_Ans: [false],
      Pensionne: [false],
      Chef_Menage: [false],

  });
}
  // Fonction appelée lors de la soumission du formulaire
  onSubmit() {
    // Vérification si le formulaire est valide
    if (this.personnesForm.valid) {
      // Récupération des données du formulaire
      const formData = this.personnesForm.value;
      console.log('Données à envoyer au backend :', formData);
      
      // Envoi des données au backend via le service ExpressService
      this.expressService.callExpressRoute(formData).subscribe({
        // Callback en cas de succès
        next: response => {
          console.log('Réponse du backend :', response);
        },
        // Callback en cas d'erreur
        error: err => {
          console.log('Erreur lors de l\'envoi des données au backend :', err);
        }
    });
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
