import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {
  }

  getCountryData$(country: string): Observable<any> {
    let url = `https://corona.lmao.ninja/v2/countries?yesterday=&sort=`;
    return new Observable(observer => {
      return this.http.get(url).subscribe((res: any[]) => {
        observer.next(res.filter(e => e.country === country)[0]);
      });
    });
  }

  getStatesData$(): Observable<any> {
    let url = `https://api.covid19india.org/state_district_wise.json`;
    return new Observable(observer => {
      return this.http.get(url).subscribe((res: any[]) => {
        observer.next(res);
      });
    });
  }

  getHistoryData$(): Observable<any> {
    let url = `https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1`;
    return new Observable(observer => {
      return this.http.get(url).subscribe((res: any[]) => {
        observer.next(res);
      });
    });
  }
}
