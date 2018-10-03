import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {RESTService} from '../../rest.service';
import {IEmail} from './IEmailEntity';

@Injectable({providedIn: 'root'})

export class GmailService extends RESTService <IEmail>{
    constructor(private http: HttpClient){
        super(http,'/gmail/send/')
    }
    public sendEmailtoHost (data : IEmail){
        this.Post(data);
    }
}












