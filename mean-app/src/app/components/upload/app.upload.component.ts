import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, PatternValidator} from '@angular/forms';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { UploadService} from '../../services/api/upload/uploadService';


class imageSnippet {
  constructor(public src: string, public file: File){}
}
 
@Component({
  selector: 'app-upload-component',
  templateUrl: './app.upload.component.html',
  styleUrls: [ './app.upload.component.css' ]
})
export class UploadComponent{

  selectedFile: imageSnippet;

  constructor(private uploadService : UploadService) {   
  }

  private processFile(imageInput: any) {

    const file: File = imageInput.files[0];

    const reader = new FileReader();

    reader.addEventListener('load', (e : any)=>{
      this.selectedFile = new imageSnippet(e.target.result, file);
      this.uploadService.upload(this.selectedFile.file).subscribe(
        (res)=>{

        },
        (err)=>{

        }
      )
    })

    reader.readAsDataURL(file);
  }
  
}