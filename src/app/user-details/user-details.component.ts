import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../user.modal';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  Data:any=''
  profileData:any=''
  key:string=''
  ALLData: any;
  constructor(private routes: Router) { }

  ngOnInit(): void {
   this.Data = localStorage.getItem('prince');
    this.profileData = JSON.parse(this.Data); 
    this.ALLData = JSON.parse(this.Data); //copy
  }
  userData(email: string) {
    this.routes.navigateByUrl('User' +'/'+ email);
  }

  removeUser(index:number) {
    this.profileData.splice(index, 1)

    localStorage.setItem('prince', JSON.stringify(this.profileData));
  }
  SearchData(e: string) {
      this.profileData = this.ALLData;
      this.key = e
      console.log(this.key);
  
        // 2nd  Approch to use filter in easy way

      this.profileData = this.profileData.filter((p: Users) => {
        let val = Object.values(p).toString() + Object.values(p.address.map(a => Object.values(a))).toString() + Object.values(p.cardDetails.map(c => Object.values(c))).toString();
        return val.includes(e);
      })
   
    // 1st  Approch to use filter
    
    // let temp:Users[] = []
    //   this.ALLData.filter((sKey: Users) => {
    //     // for (let i = 0; i < this.profileData.length; i++) {
    //     if (sKey.searchKey.includes(this.key)) {
    //       console.log(sKey);
    //       temp.push(sKey)
    //     }
    //   // }
    //   })
    
    // this.profileData = temp;

  }

  paginate(event: any) {
    this.profileData = this.ALLData;
    console.log(event.target.value);
    let value = event.target.value;

    this.profileData.splice(value)
    this.profileData = this.ALLData;
  }

}
