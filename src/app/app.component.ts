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

  constructor(private getData: GetData) {
    // this.getData.getAllData().subscribe(data => this.response = data);
  }

  ngOnInit() {
    this.getAllDataOfCompany();
  }

  getAllDataOfCompany() {
    this.getData.getAllData().subscribe((data: {}) => {
      this.allDataOfCompany = data;
      // console.log('allDataOfCompany   ::::   ' + JSON.stringify(this.allDataOfCompany));
    });

    this.getData.getUsersData().subscribe((data: {}) => {
      this.dataOfUsers = data;
      // console.log('dataOfUsers   ::::   ' + JSON.stringify(this.dataOfUsers));
    });

    this.getData.getContactsData().subscribe((data: {}) => {
      this.dataOfContacts = data;
      // console.log('dataOfContacts   ::::   ' + JSON.stringify(this.dataOfContacts));
    });

    this.getData.getCompaniesData().subscribe((data: {}) => {
      this.dataOfCompanies = data;
      // console.log('dataOfCompanies   ::::   ' + JSON.stringify(this.dataOfCompanies));
    });
  }
  
  
  
}
