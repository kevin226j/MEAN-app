import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of ,Observable, throwError} from 'rxjs';
import { map, catchError, tap} from "rxjs/operators";
import {ErrorResponseHandler} from './responses/errorReponseHandler';

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
            map(this.extractData),
            catchError(ErrorResponseHandler<T>('GetAll'))
        )
    }

    public GetById(id:string) : Observable<T> {
        return  this._http.get<T>(this.baseURL+this.actionURL+`/${id}`).pipe(
            map(this.extractData),
            catchError(ErrorResponseHandler<T>('GetById'))
        )
    }

    public Post (payload: T) : Observable<T>{
        return this._http.post<T>(this.baseURL+this.actionURL, payload, httpOptions).pipe(
            catchError(ErrorResponseHandler<T>('Post'))
        )
    }

    public Delete (id: string) : Observable <T> {
        return this._http.delete<T>(this.baseURL+this.actionURL+`/${id}`, httpOptions).pipe(
            catchError(ErrorResponseHandler<T>('Delete'))
        )
    }

    
    public Put (id: string, payload: T) : Observable <any> {
        return this._http.put(this.baseURL+this.actionURL+`/${id}`, payload, httpOptions).pipe(
            catchError(ErrorResponseHandler<T>('Put'))
        )
    }
}
