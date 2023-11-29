import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.css']
})
export class ListePersonnesComponent {
  personnes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
     
    this.http.get<any[]>('http://localhost:8081/api/personnes/getAll')

    .subscribe(data => {
      this.personnes = data;
      console.log(this.personnes);
      
    }, error => {
      console.error('Erreur lors de la récupération des bénéficiaires : ', error);
    });
  }
}
