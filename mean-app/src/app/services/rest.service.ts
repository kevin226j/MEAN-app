import { HttpClient } from '@angular/common/http';
import {of ,Observable, throwError} from 'rxjs';
import { map, catchError, tap} from "rxjs/operators";

export abstract class RESTService <T> {
    constructor(protected _http: HttpClient, protected actionURL: string){}

    private baseURL = "http://localhost:3000/api"

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

    public GetAll() : Observable<T[]> {
        return this._http.get<T[]>(this.baseURL+this.actionURL).pipe(
            map(this.extractData)
        )
    }

    public GetById(id:string) : Observable<T> {
        return  this._http.get<T>(this.baseURL+this.actionURL+`/${id}`).pipe(
            map(this.extractData)
        )
    }
}

//TODO: add error/catch handler