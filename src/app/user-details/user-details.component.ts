import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  Data:any=''
  profileData:any=''
  searchkey:string=''
  ALLData: any;
  constructor(private routes: Router) { }

  ngOnInit(): void {
   this.Data = localStorage.getItem('prince');
    this.profileData = JSON.parse(this.Data);
    
    this.ALLData = this.profileData //copy
  }
  userData(email: string) {
    this.routes.navigateByUrl('User' +'/'+ email);
  }

  removeUser(index:number) {
    this.profileData.splice(index, 1)

    localStorage.setItem('prince', JSON.stringify(this.profileData));
  }
  SearchData(e: string) {
    this.searchkey = e
    this.ALLData = this.profileData
    let prince = this.searchkey
    if (prince != 'all') {
      this.ALLData.forEach((user: any) => {
        let add: any[] = [];
        user.cardDetails.forEach((t: any) => {
          if (t == prince) {
            add[0].push(t);
            console.log(t);
          }
        });
        user.cardDetails = add;
      });
    }
  }

}
