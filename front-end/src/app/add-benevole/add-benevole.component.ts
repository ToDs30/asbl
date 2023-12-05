import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ExpressService } from '../services/benevole.service';

@Component({
  selector: 'app-add-benevole',
  templateUrl: './add-benevole.component.html',
  styleUrls: ['./add-benevole.component.css']
})
export class AddBenevoleComponent {
  benevoleForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private expressService: ExpressService) {
    this.benevoleForm = this.formBuilder.group ({
      Nom : ['', Validators.required],
      Prenom : ['', Validators.required], 
      GSM : ['', Validators.required],
      Date_Naissance: ['', Validators.required],
      Rue : ['', Validators.required],
      Numero : ['', Validators.required],
      Boite : ['', Validators.required],
      CodeP: ['', Validators.required],
      Commune: ['', Validators.required],
    
    });
  }
  onSubmit() {
    if (this.benevoleForm.valid) {
      const formData = this.benevoleForm.value;
      console.log('Données à envoyer au backend:', formData);
      
      this.expressService.callExpressRoute(formData).subscribe({
        next : response => {
          console.log('Réponse du back : ', response);         
        }, 
        error: err => {
          console.log('Erreur lors de l\'envoie des données au backend:', err);
        }
      });
    } else {
      console.log('Le formulaire est invalide');
      
    }
  }
}
