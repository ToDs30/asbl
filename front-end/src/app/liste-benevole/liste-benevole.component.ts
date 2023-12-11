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
  nombreBenevole: number = 0; // Total des bénévoles
  nombreBenevoleFiltre: number = 0; // Total des bénévoles après filtrage
  rechercheAdresseBenevole: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8081/api/benevole/getAll')
      .subscribe(data => {
        this.benevoles = data;

        // Filtrer les bénévoles en fonction de la recherche
        const benevolesFiltres = this.benevoles.filter(benevole =>
          benevole.Rue.toLowerCase().includes(this.rechercheAdresseBenevole.toLowerCase()) ||
          benevole.Numero.toString().toLowerCase().includes(this.rechercheAdresseBenevole.toLowerCase())
        );

        // Comptabiliser le nombre total de bénévoles
        this.nombreBenevole = this.benevoles.length;

        // Recalcule les statistiques basées sur les résultats de la recherche
        this.nombreBenevoleFiltre = benevolesFiltres.length;

      }, error => {
        console.error('Erreur lors de la récupération des bénévoles : ', error);
      });


  }
  deleteBenevole(id: number): void {
    this.http.delete(`http://localhost:8081/api/benevole/delete/${id}`)
      .subscribe(() => {
        // Rechargez la liste après la suppression
        this.ngOnInit();
      }, error => {
        console.error('Erreur lors de la suppression du bénévole : ', error);
      });
  }
}
