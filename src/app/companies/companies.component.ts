import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

    @Input() dataOfCompanies: any;
    @Input() dataOfContacts: any;
    @ViewChild('contactsLayer', { static: true })
    private contactsLayerTemplate!: TemplateRef<any>;
    
    matDialogRef!: MatDialogRef<any, any>;
    showAvailableContacts: boolean = false;
    availableContacts: any;

    constructor(private matDialog: MatDialog) {}

    ngOnInit(): void {
        // console.log('dataOfContacts  ::    ' + JSON.stringify(this.dataOfContacts.length));
    }

    showContacts(data: any) {
        const finalList = [];
        if(data) {
            this.showAvailableContacts = true;
            for(const contact of this.dataOfContacts) {
                if(data.id == contact.companyId) {
                    finalList.push(contact);
                }
            }
            
           this.availableContacts = finalList;
           // console.log('availableContacts  ::   ' + JSON.stringify(this.availableContacts));
        }
    }

    deleteRecord(value: any){
        const index = this.availableContacts.indexOf(value);
        this.availableContacts.splice(index, 1);
    }

    openLayer() {
        this.matDialogRef = this.matDialog.open(this.contactsLayerTemplate, {
            panelClass: 'contacts-layer'
        })
    }

}