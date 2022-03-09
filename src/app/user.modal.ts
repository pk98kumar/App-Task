import { Address } from "./address.modal";



export class Users {

  constructor(
    public name?: string,
    public email?: string,
    public password?: string,
    public mobileNumber?: string,
    public address?: Address[],
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.email = email;
    this.mobileNumber = mobileNumber;
    this.address=[new Address()];
  }
}