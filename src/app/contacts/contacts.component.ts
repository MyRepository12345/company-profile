import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    @Input() dataOfContacts: any;
    @Input() selectedCompany: any;


    ngOnInit(): void {
        // console.log('selectedCompany   ::   ' + JSON.stringify(this.selectedCompany));
        // console.log('dataOfContacts   ::   ' + JSON.stringify(this.dataOfContacts));
    }


}