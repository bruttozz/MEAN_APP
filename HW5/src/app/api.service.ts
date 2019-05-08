import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const apiURL = 'http://localhost:4200';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {
  }

  googleLogin(): void {
    const URL = `${apiURL}/auth/google`;
    window.location.assign(URL);
  }

}
