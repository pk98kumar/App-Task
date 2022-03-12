import { Address } from "./address.modal";
import { CardDetails } from "./cardDetails.modal";



export class Users {

  name: string  = '';
  email: string = '';
  password: string = '';
  mobileNumber: string = '';
  address: Address[] = [];
  cardDetails:CardDetails[] = []

  // constructor(
  //   public name: string,
  //   public email: string,
  //   public password: string,
  //   public mobileNumber: string,
  //   public address: Address[],
  // ) {
  //   this.name = name;
  //   this.email = email;
  //   this.password = password;
  //   this.email = email;
  //   this.mobileNumber = mobileNumber;
  //   this.address=[];
  // }
}