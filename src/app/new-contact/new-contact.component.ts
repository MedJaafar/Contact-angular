import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/model.contact';
import { ContactserviceService } from 'src/services/contactservice.service';


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

mode:number = 1;
contact:Contact=new Contact();
getcontact: any;
countries:any;
SelectedCountry:any;

  constructor(private contactservice:ContactserviceService) { }

  ngOnInit() {
    this.getCountry();
  }

  getCountry(){
    this.contactservice.getCountryList().subscribe((response)=>{
this.countries=response;
console.log(this.countries);
    })
  }

  saveValidate(dataForm){
    this.contact=dataForm;
    this.contact.adress=this.contact.adress+", "+this.SelectedCountry;
    this.contactservice.saveContact(this.contact)
    .subscribe((response)=>{
      this.getcontact=response;
      this.contact.id=this.getcontact.id;
    console.log(response);
    this.mode= 2 ;
     })
     
  }

}
