import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExpressService {
    private expressUrl = 'http://localhost:8081/api'; 

    constructor(private http: HttpClient) { }

    getBeneficiaires(): Observable<any> {
        return this.http.get(`${this.expressUrl}/personnes`);
    }

    callExpressRoute(data: any): Observable<any> {
        console.log(data);
        
        return this.http.post(`${this.expressUrl}/personnes/add-personnes`, data);
        
       
    }
    
    
}

