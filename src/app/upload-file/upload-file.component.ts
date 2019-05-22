import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
selectedFile :File =null;
  constructor(private http : HttpClient) {}

  ngOnInit() {
  }

 onFileSelected(event){
   
    console.log(event);
    this.selectedFile= <File>event.target.files[0];
    
 }
//On upload selected file will be sent to the url , type file should be formatted with FormatData() and it will 
//define what to send through, the 'string' acts like http request param ....
 onUpload(){
  const fd = new FormData();
  fd.append('file',this.selectedFile);
  this.http.post('http://localhost:8080/fileupload',fd).subscribe(res =>{console.log(res)});
 }
}
