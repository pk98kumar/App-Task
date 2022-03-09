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


UsersData:Users = new Users ();
  data: any;
 address:Address =new Address()

//  ngOnInit() {
//   this.UsersData.address?.push(this.address)
//  }

onSubmit(RegisterForm:NgForm){
    this.data = RegisterForm.value
   this.data = this.UsersData
  console.log(this.data ,"user Data");
}


addNewDiv() {
this.UsersData.address?.push(new Address())

}
removeAddress(id:any){
  this.UsersData.address?.splice(id,1)
}


}


