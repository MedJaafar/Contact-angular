import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 info={
   name : "Jean Jacques", email : "jj@yahoo.fr"
  }
  constructor() { }

  ngOnInit() {
console.log("sdjsdljdslsdlsdllsdfj");
  }

}
