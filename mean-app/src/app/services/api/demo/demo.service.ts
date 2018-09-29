import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {RESTService} from '../../rest.service';
import {Idemo} from './IdemoEntity';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class DemoService extends RESTService <Idemo>{
    constructor(private http: HttpClient){
        super(http,'/demo')
    }
    //TODO: implement authorization service and add other services here...or maybe in the constructor/abstract class?
}












