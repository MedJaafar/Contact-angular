import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactserviceService } from 'src/services/contactservice.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  pageContact : any ; //lavariable qui prend l'objet JSON
  motCle : string ="";
  currentPage : number=0;
  size : number=4;
  pages : any;

  constructor(private http:HttpClient,private contactservice:ContactserviceService) { }
  
  //apperemment c'est la méthode pricipale du composant se lance au chargement du composant
  ngOnInit() {
    //Appel au contactService.getContact ( obs) pour le transformer dans le component.. Retourne object (response)
   /*this.contactservice.getContact()
  .subscribe((response)=>{
    this.pageContact = response;
    console.log(response);
    })
*/
  }
//sera appelé au click du bouton chercher à contact.component.html
  doSearch(){
    this.contactservice.getContact(this.motCle,this.currentPage,this.size)
    .subscribe((response)=>{
      this.pageContact = response;
      this.pages=new Array(this.pageContact.totalPages)
      console.log(response);
      console.log("total pages :"+this.pageContact.totalPages);
      })
  }
  gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }

}
