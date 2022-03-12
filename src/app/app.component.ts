import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from './address.modal';
import { CardDetails } from './cardDetails.modal';
// import { Address } from './address.modal';
import { Users } from './user.modal';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formsApp';


// UsersData:Users = new Users();
// newUser:Users[]=[]
//   data: any;
// address:Address =new Address();
// cardDetails:CardDetails = new CardDetails()

 ngOnInit() {
  // this.UsersData.address.push(this.address)
  // this.UsersData.cardDetails.push(this.cardDetails)
  // this.newUser
 }

// onSubmit(RegisterForm:NgForm){
//     //this.data = RegisterForm.value
//   //  this.data = RegisterForm.value;
//   console.log(this.data ,"user Data");
 
//   this.newUser.push(this.UsersData);
//   console.log(this.newUser);
//   // this.data = this.UsersData
//   // console.log(this.data ,"user Data");
//   // this.newUser.push(this.UsersData)

  
//   localStorage.setItem('prince', JSON.stringify(this.newUser));
// }


// addNewDiv() {
//   // console.log("Before lopg", this.UsersData.address)
//   this.address = new Address();
// this.UsersData.address.push(this.address)
// // console.log("Adfter lopg", this.UsersData.address)
// }

// removeAddress(index:number){
//   this.UsersData.address?.splice(index,1)
// }


// addNewCard(){
//   this.cardDetails = new CardDetails();
//   this.UsersData.cardDetails.push(this.cardDetails)
// }
// removeCard(index:number){
//   this.UsersData.cardDetails.splice(index,1)
// }


}


