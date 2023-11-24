import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from './dinosaurio';

@Component({
  selector: 'app-dinosaurios',
  templateUrl: './dinosaurios.component.html',
  styleUrls: ['./dinosaurios.component.css']
})
export class DinosauriosComponent implements OnInit {

  private dinosaurios: Array<Dinosaurio> = [];
  constructor() { }

  ngOnInit() {
  }

}
