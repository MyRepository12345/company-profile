import { Component, OnInit } from '@angular/core';
import { GetData } from 'src/services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-git-project';
  allDataOfCompany: any;
  dataOfUsers: any;
  dataOfContacts: any;
  dataOfCompanies: any;

  constructor(private getData: GetData) {}

  ngOnInit() {
    this.getAllDataOfCompany();
  }

  getAllDataOfCompany() {
    
    this.getData.getAllData().subscribe((data: {}) => {
      this.allDataOfCompany = data;
    });

    this.getData.getUsersData().subscribe((data: {}) => {
      this.dataOfUsers = data;
    });

    this.getData.getContactsData().subscribe((data: {}) => {
      this.dataOfContacts = data;
    });

    this.getData.getCompaniesData().subscribe((data: {}) => {
      this.dataOfCompanies = data;
    });

  }
  
  
  
}
