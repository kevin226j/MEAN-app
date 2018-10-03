import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of ,Observable, throwError} from 'rxjs';
import { map, catchError, tap} from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

    public Post (payload: T){
        return this._http.post<T>(this.baseURL+this.actionURL, payload, httpOptions).pipe(
            tap((data) => {}),
            catchError(this.handleError<any>('Post')),
        ).subscribe()
    }

    //TODO: UPDATE AND DELETE service

    //TODO: add error/catch handler
    private handleError<T> (operation = 'operation', result?:T){
        return (err:any) : Observable <T> => {
            console.log('entered error');
            //TODO: send error to remote logging system..
            console.log(err);
            //TODO: make error readable for user
            console.log(`${operation} failed: ${err.message}`);
            //let app continue, return empty result.
            return of(result as T);
        }
    }
}

//TODO: add error/catch handler