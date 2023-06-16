import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import {employee} from '../Model/EmployeeModel';
import { AddEvent, EditEvent, RemoveEvent } from '@progress/kendo-angular-grid';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import {Product } from '../Model/Product';
import {products } from '../Model/ProductModel';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  list:any;


addEmployee = new employee();

updateEmployee = new employee();

AddDialogOpen:boolean = false;

  constructor(private EmployeeData:EmployeeService ,private router :Router)
{
//   userData.users().subscribe(data=>{
//     console.warn("data",data);
//     this.users=data
//   });
 //console.warn(this.users)
}
forms: FormGroup = new FormGroup({
  firstname: new FormControl(),
  lastname: new FormControl(),
  gender: new FormControl(),
  designation: new FormControl(),
  salary: new FormControl(),
  email: new FormControl(),
  city: new FormControl(),

});



ngOnInit() {


  this.getData();
//   this.EmployeeData.getEmployee().subscribe((data:any) => {
//  console.log(data);
//  this.list = data
//       // do something with the data here
 
//   });

 }




 getData() {
  this.EmployeeData.getEmployee().subscribe({

    next: (data) => {
      this.list = data;
    },
    error: (response) => {
      console.log(response);  
    }
  })
}




AddHandler(args: AddEvent) {

  alert("IT is Called to Add")
  // this.addEmployee.firstname = args.dataItem.firstname;
  // this.addEmployee.lastname = args.dataItem.lastname;
  // this.addEmployee.gender = args.dataItem.gender;
  // this.addEmployee.designation = args.dataItem.designation;
  // this.addEmployee.salary = args.dataItem.salary;
  // this.addEmployee.email = args.dataItem.email;
  // this.addEmployee.city = args.dataItem.city;


  console.warn(args.dataItem);

  this.AddDialogOpen = true;
}

AddEmployee()  {
  console.log(this.forms.value);

if(this.forms.valid){
  console.log(this.forms.value);

  this.EmployeeData.addsignup(this.forms.value).subscribe((response:any)  => {

console.warn(this.forms.value);


    alert("Successfully Added");
    this.getData();



  })
}else{
  alert('Provide valid data ')
}
}
AddData() {
  
  // console.warn(this.updateEmployee.firstname)
  // this.EmployeeData.addEmployee( this.addEmployee.firstname!,
  //   this.addEmployee.lastname!,
  //   this.addEmployee.gender!,
  //   this.addEmployee.designation!,
  //   this.addEmployee.salary!,
  //   this.addEmployee.email!,
  //   this.addEmployee.city!).subscribe((response)=> {
  //   this.getData();
  // })

  var data = {
      
    firstname: this.addEmployee.firstname!,
    lastname: this.addEmployee.lastname!,
    gender: this.addEmployee.gender!,
    designation: this.addEmployee.designation!,
    salary: this.addEmployee.salary!,
    email: this.addEmployee.email!,
    city: this.addEmployee.city!
  }
  this.EmployeeData.addEmployee(data).subscribe((response)=> {
    this.getData();
  })


}





 editHandler(args: EditEvent) {

  this.updateEmployee.employeeid = args.dataItem.employeeid;
  this.updateEmployee.firstname = args.dataItem.firstname;
  this.updateEmployee.lastname = args.dataItem.lastname;
  this.updateEmployee.gender = args.dataItem.gender;
  this.updateEmployee.designation = args.dataItem.designation;
  this.updateEmployee.salary = args.dataItem.salary;
  this.updateEmployee.email = args.dataItem.email;
  this.updateEmployee.city = args.dataItem.city;


  console.warn(args.dataItem);



 
  this.opened = true;
}

updateData() {
  
  console.warn(this.updateEmployee.firstname)
  this.EmployeeData.updateEmployee(this.updateEmployee.employeeid!, this.updateEmployee.firstname!,
    this.updateEmployee.lastname!,
    this.updateEmployee.gender!,
    this.updateEmployee.designation!,
    this.updateEmployee.salary!,
    this.updateEmployee.email!,
    this.updateEmployee.city!).subscribe((response)=> {

    this.getData();
    alert("Data Updated Successfully")

  })

 

}














public opened = false;

public close(status: string): void {
  console.log(`Dialog result: ${status}`);
  this.opened = false;
}

public open(): void {
  
}






removeHandler(args: RemoveEvent) {

  console.warn(args.dataItem);
  
  this.EmployeeData.deleteEmployee(args.dataItem).subscribe((response)=> {
    this.getData();
    alert("Data Deleted Successfully")

  })



}


public scale = 0.8;






}