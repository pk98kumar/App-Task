import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address.modal';
import { CardDetails } from '../cardDetails.modal';
import { Users } from '../user.modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  editMode:boolean=false
  UsersData: Users = new Users();
  newUser: Users[] = []
  data: any;
  address: Address = new Address();
  cardDetails: CardDetails = new CardDetails();
  UserEmail:string='';
 
  constructor(private routes: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.UsersData.address.push(this.address)
    this.UsersData.cardDetails.push(this.cardDetails)
    let list = localStorage.getItem('prince')
    if (list != null) {
      this.newUser=JSON.parse(list)
    }
    this.UserEmail = this.route.snapshot.params['email'];
    console.log(this.UserEmail, 'yerey732741858');

    this.newUser.filter((e: any) => {
      if (e.email == this.UserEmail) {
        this.UsersData = e;
        console.log(this.UsersData);
      }
    });

    if (this.UserEmail != null && this.UserEmail != undefined) { 
      this.editMode =true
    }

  }

  onSubmit(RegisterForm: NgForm) {
    console.log(this.data, "user Data");
    if (this.editMode == true) {
      this.UsersData = RegisterForm.value
    } else {
      this.newUser.push(this.UsersData);
    }
    console.log(this.newUser);
    localStorage.setItem('prince', JSON.stringify(this.newUser));
  }


  addNewDiv() {
    this.address = new Address();
    this.UsersData.address.push(this.address)

  }

  removeAddress(index: number) {
    this.UsersData.address?.splice(index, 1)
  }


  addNewCard() {
    this.cardDetails = new CardDetails();
    this.UsersData.cardDetails.push(this.cardDetails)
  }
  removeCard(index: number) {
    this.UsersData.cardDetails.splice(index, 1)
  }

  showTables() {
    this.routes.navigate(['user-Details']);
  }
}
