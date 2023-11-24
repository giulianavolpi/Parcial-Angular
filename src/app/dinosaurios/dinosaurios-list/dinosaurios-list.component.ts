import { Component, OnInit } from '@angular/core';
import { DinosaurioDetail } from '../dinosaurio-detail';
import { DinosaurioService } from '../dinosaurio.service';

@Component({
  selector: 'app-dinosaurios-list',
  templateUrl: './dinosaurios-list.component.html',
  styleUrls: ['./dinosaurios-list.component.css']
})
export class DinosauriosListComponent implements OnInit {

  dinosaurios: Array<DinosaurioDetail> = [];
  selectedDinosaurio!: DinosaurioDetail;
  selected: boolean = false;

  constructor(private dinosaurioService: DinosaurioService) { }

  getDinosaurios(){
    this.dinosaurioService.getDinosaurios().subscribe(apiData=>{
      this.dinosaurios = apiData;
    })
  }

  selectDinosaurio(dinosaurio: DinosaurioDetail){
    this.selectedDinosaurio = dinosaurio;
    this.selected = true;
  }

  ngOnInit() {
    this.getDinosaurios();
  }

}
