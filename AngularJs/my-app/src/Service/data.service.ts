import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TB_M_Level } from '../Model/DataModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://localhost:7187/api/';

  constructor(private http: HttpClient) { }

    Login(param:any): Observable<any> {
    return this.http.post(this.apiUrl+"Auth/login",param);
  }

  test(): Observable<any> {
    return this.http.get(this.apiUrl+"Auth/test");
  }

  GetForcast(): Observable<any> {
    return this.http.get("https://localhost:7187/WeatherForecast");
  }

  

  // getData(): Observable<TB_M_Level[]> {
  //   return this.http.get<TB_M_Level[]>(this.apiUrl);
  // }
  // sendData(id:number): void {
  //   this.http.post<any>('http://localhost:3000/api/UpdateLevel',{id:id}).subscribe(x=>console.log(x));
  // }
  // getDataV2(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
}
