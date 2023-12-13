import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: '/',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle('ASBL Saint Vincent de Paul Docherie');
  }
  
}
