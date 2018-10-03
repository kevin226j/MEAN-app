import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {RESTService} from '../../rest.service';
import {Idemo} from './IdemoEntity';

@Injectable({providedIn: 'root'})
export class DemoService extends RESTService <Idemo>{
    constructor(private http: HttpClient){
        super(http,'/demo')
    }
    //TODO: implement authorization service and add other services here...or maybe in the constructor/abstract class....or ontop of the constructor?

    /*
        something like this.... 
        public getAll() {
            if(authorized){
                this.getAll()
            } else {
                throw error(message: not authorized);
            }
        }
    */

}












