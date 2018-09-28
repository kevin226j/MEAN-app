import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


import {of ,Observable, throwError} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';

import {Idemo} from './IdemoEntity';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn: 'root'})

export class DemoService {
    private BASE_URL = "http://localhost:3000/api";

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

    constructor(private http : HttpClient){}

    getDemoData(): Observable<Idemo[]> {
        return this.http.get<Idemo[]>(`${this.BASE_URL}/demo`)
        .pipe(
            map(this.extractData)
        );
    }

}








