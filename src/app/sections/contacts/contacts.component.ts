import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [
    new Contact('fa fa-phone', '0882693775', ''),
    new Contact('fa fa-linkedin-square', 'in/ivodimitrovnikolov', 'https://www.linkedin.com/in/ivodimitrovnikolov/'),
    new Contact('fa fa-facebook-square', 'facebook.com/ivo.nikolov.1048', 'https://www.facebook.com/ivo.nikolov.1048'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
