import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from './address.modal';
// import { Address } from './address.modal';
import { Users } from './user.modal';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formsApp';


UsersData:Users = new Users();
  data: any;
address:Address =new Address()

 ngOnInit() {
  this.UsersData.address.push(this.address)
 }

onSubmit(){
    //this.data = RegisterForm.value
   this.data = this.UsersData
  console.log(this.data ,"user Data");
}


addNewDiv() {
  console.log("Before lopg", this.UsersData.address)
  this.address = new Address();
this.UsersData.address.push(this.address)
console.log("Adfter lopg", this.UsersData.address)
}
removeAddress(index:number){
  this.UsersData.address?.splice(index,1)
}


}


