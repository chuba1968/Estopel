import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage {

  constructor() { }


  
  
    
  
    whatsapp() {
      { window.open('https://wa.me/+234908077025'); }
    }

}
