import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, PatternValidator} from '@angular/forms';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { UploadService} from '../../services/api/upload/uploadService';
import { InputDecorator } from '@angular/core/src/metadata/directives';


class imageSnippet {
  constructor(public src: string, public file: File){}
}
 
@Component({
  selector: 'app-upload-component',
  templateUrl: './app.upload.component.html',
  styleUrls: [ './app.upload.component.css' ]
})
export class UploadComponent{

  @ViewChild('successAlertSwal') private successAlertSwal: SwalComponent;
  @ViewChild('errorAlertSwal') private errorAlertSwal: SwalComponent;
  
  selectedFile: imageSnippet;
  	
  addTaskValue: string = "";

  constructor(private uploadService : UploadService) {   
  }

  private processFile(imageInput: any) {

    const file: File = imageInput.files[0];

    const reader = new FileReader();

    reader.addEventListener('load', (e : any)=>{
      this.selectedFile = new imageSnippet(e.target.result, file);
      console.log(this.selectedFile);
      this.uploadService.upload(this.selectedFile.file).subscribe(
        (res)=>{
          //ALERTS SHOULD APPEAR BASED ON REST.SERVICE.TS
          this.successAlertSwal.show();
        },
        (err)=>{
          this.errorAlertSwal.show();
        }
      )
      this.addTaskValue = "";
    })

    reader.readAsDataURL(file);
  }
  
}