import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from 'src/models/model.contact';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor(private http:HttpClient) { }

  //Méthode du service qui retourne un object oservable, l'appel est fait dans ngUnit() dans le Component
  getContact(motCle:string,page:number,size:number){
    //localhost:8080
   return this.http.get("http://localhost:8080//cherchercontacts?mc="+motCle+"&size="+size+"&page="+page);
  }
  saveContact(contact:Contact){
    return this.http.post("http://localhost:8080//contacts",contact);
  }

  getCountryList(){
     return this.http.get("https://restcountries.eu/rest/v2/all");
  }
}
