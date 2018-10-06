import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {RESTService} from '../../rest.service';
import {of ,Observable, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})

export class UploadService extends RESTService <any>{
    constructor(private http: HttpClient){
        super(http,'/image-upload')
    }
    public upload (data : File) : Observable <any>{
        const formData = new FormData();
        formData.append('image', data); //append fieldname
        return this.Post(formData, 'none');
    }
}