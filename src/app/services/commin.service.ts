import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComminService {
  url = "http://127.0.0.1:8000/api/";
  constructor(private http: HttpClient) { }

  postApi(data: any, subUrl: string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, data).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    });
  }

  getApi(subUrl:string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + subUrl).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    });
  }
}
