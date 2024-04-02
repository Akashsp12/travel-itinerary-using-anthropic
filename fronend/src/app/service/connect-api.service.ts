import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectApiService {
  environment = 'http://localhost:3000/chat/'
  constructor(private http: HttpClient) { }


  getRepsonse(data: any) {


    console.log(data)
    return this.http.post(this.environment + "open-ai-response", data)

  }

}
