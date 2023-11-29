import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
     
    this.http.get<any[]>('http://localhost:8081/api/task/getAll')

    .subscribe(data => {
      this.tasks = data;
      console.log(this.tasks);
      
    }, error => {
      console.error('Erreur lors de la récupération des tâches : ', error);
    });
  }
}
