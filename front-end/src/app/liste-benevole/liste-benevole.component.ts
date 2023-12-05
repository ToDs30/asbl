// Importe les classes HttpClient et Component depuis Angular Common et Core respectivement
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

// Déclare le composant Angular avec un sélecteur, un modèle de vue et un style
@Component({
  selector: 'app-liste-benevole',
  templateUrl: './liste-benevole.component.html',
  styleUrls: ['./liste-benevole.component.css']
})
// Déclare la classe du composant et implémente l'interface OnInit
export class ListeBenevoleComponent implements OnInit {
  benevoles: any[] = [];
  nombreBenevole: number = 0;
  rechercheAdresseBenevole: string = '';

  // Injecte le service HttpClient dans le constructeur du composant
  constructor(private http: HttpClient) {}

  // Implémente la méthode ngOnInit, appelée au démarrage du composant
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8081/api/benevole/getAll')
      .subscribe(data => {
        this.benevoles = data;
  
        // Filtrer les bénévoles en fonction de la recherche
        const benevolesFiltres = this.benevoles.filter(benevole =>
          benevole.Rue.toLowerCase().includes(this.rechercheAdresseBenevole.toLowerCase()) ||
          benevole.Numero.toString().toLowerCase().includes(this.rechercheAdresseBenevole.toLowerCase())
        );
  
        // Recalcule les statistiques basées sur les résultats de la recherche
        this.nombreBenevole = benevolesFiltres.length;
  
      }, error => {
        console.error('Erreur lors de la récupération des bénévoles : ', error);
      });
  }
}
