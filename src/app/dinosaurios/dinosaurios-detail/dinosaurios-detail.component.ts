import { Component, OnInit, Input } from '@angular/core';
import { DinosaurioDetail } from '../dinosaurio-detail';
import { DinosaurioService } from '../dinosaurio.service';

@Component({
  selector: 'app-dinosaurios-detail',
  templateUrl: './dinosaurios-detail.component.html',
  styleUrls: ['./dinosaurios-detail.component.css']
})
export class DinosauriosDetailComponent implements OnInit {

  dinosaurioId!: string;
  @Input() dinosaurioDetail!: DinosaurioDetail;

  constructor(
    private dinosaurioService: DinosaurioService
  ) { }

  getDinosaurio(){
    this.dinosaurioService.getDinosaurio(this.dinosaurioId).subscribe(apiData=>{
      this.dinosaurioDetail = apiData;
    })
  }

  ngOnInit() {
    if(this.dinosaurioDetail === undefined){
      
      if (this.dinosaurioId) {
        this.getDinosaurio();
      }
  }

}}
