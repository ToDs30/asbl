import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  selectedRowIndex: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8081/api/task/getAll')
      .subscribe(data => {
        this.tasks = data.map(task => ({ ...task, taskStatus: false }));
        console.log(this.tasks);
      }, error => {
        console.error('Erreur lors de la récupération des tâches : ', error);
      });
  }

  effectuerClick(index: number): void {
    this.tasks[index].taskStatus = !this.tasks[index].taskStatus;
    this.selectedRowIndex = index;
  }
}
