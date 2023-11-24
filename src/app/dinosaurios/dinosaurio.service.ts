import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { Dinosaurio } from './dinosaurio';
import { DinosaurioDetail } from './dinosaurio-detail';

@Injectable({
    providedIn: 'root'
  })
  export class DinosaurioService {

    private apiUrl: string = "https://raw.githubusercontent.com/2603-Uniandes/jsons/main/dinosaurs.json";

    constructor(private http: HttpClient) { }

    getDinosaurios(): Observable<DinosaurioDetail[]> {
        return this.http.get<DinosaurioDetail[]>(this.apiUrl);
      }
    
    getDinosaurio(id: string): Observable<DinosaurioDetail> {
        return this.http.get<DinosaurioDetail>(this.apiUrl + "/" + id);
      }


  }