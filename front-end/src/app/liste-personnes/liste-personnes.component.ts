// Importe les classes HttpClient et Component depuis Angular Common et Core respectivement
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

// Déclare le composant Angular avec un sélecteur, un modèle de vue et un style
@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.css']
})
// Déclare la classe du composant et implémente l'interface OnInit
export class ListePersonnesComponent implements OnInit {
  // Déclare et initialise les propriétés du composant
  personnes: any[] = [];
  nombreMenage: number = 0;
  nombreHandicape: number = 0;
  nombreImmigres: number = 0;
  nombreSansPapier: number = 0;
  nombreSansAbris: number = 0;
  nombreFemme: number = 0;
  nombreBebe0_6 : number = 0;
  nombreBebe6_24: number = 0;
  nombreEnfant2_14: number = 0;
  nombreAdos14_18: number = 0;
  nombreJ_Adulte: number = 0;
  nombrerAdulte: number = 0;
  nombrePensionne: number = 0;
  nombrePersonne: number = 0;
  rechercheAdressePersonne: string = '';

  // Injecte le service HttpClient dans le constructeur du composant
  constructor(private http: HttpClient) {}

  // Implémente la méthode ngOnInit, appelée au démarrage du composant
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8081/api/personnes/getAll')
      .subscribe(data => {
        this.personnes = data;
  
        // Filtrer les personnes en fonction de la recherche
        const personnesFiltrees = this.personnes.filter(personne =>
          personne.Rue.toLowerCase().includes(this.rechercheAdressePersonne.toLowerCase()) ||
          personne.Numero.toString().toLowerCase().includes(this.rechercheAdressePersonne.toLowerCase())
        );
  
        // Recalcule les statistiques basées sur les résultats de la recherche
        this.nombreMenage = personnesFiltrees.filter(personne => personne.Chef_Menage === true).length;
        this.nombreHandicape = personnesFiltrees.filter(personne => personne.Handicape === true).length;
        this.nombreImmigres = personnesFiltrees.filter(personne => personne.Immigres === true).length;
        this.nombreSansAbris = personnesFiltrees.filter(personne => personne.Sans_Abris === true).length;
        this.nombreSansPapier = personnesFiltrees.filter(personne => personne.Sans_Papier === true).length;
        this.nombreFemme = personnesFiltrees.filter(personne => personne.Femme === true).length;
        this.nombreBebe0_6 = personnesFiltrees.filter(personne => personne.Bebe_0_6_Mois === true).length;
        this.nombreBebe6_24 = personnesFiltrees.filter(personne => personne.Bebe_6_24_Mois === true).length;
        this.nombreEnfant2_14 = personnesFiltrees.filter(personne => personne.Enfants_2_14_Ans === true).length;
        this.nombreAdos14_18 = personnesFiltrees.filter(personne => personne.Ados_14_18_Ans === true).length;
        this.nombreJ_Adulte = personnesFiltrees.filter(personne => personne.J_Adulte_18_24_Ans === true).length;
        this.nombrerAdulte = personnesFiltrees.filter(personne => personne.Adultes_25_64_Ans === true).length;
        this.nombrePensionne = personnesFiltrees.filter(personne => personne.Pensionne === true).length;
          // Calcule le nombre de personnes dans la liste
        this.nombrePersonne = personnesFiltrees.length;
  
      }, error => {
        console.error('Erreur lors de la récupération des bénéficiaires : ', error);
      });
  }
  
  
  }

