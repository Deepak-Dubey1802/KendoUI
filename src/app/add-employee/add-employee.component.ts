import { Component,ViewChild } from '@angular/core';
import {employee} from '../Model/EmployeeModel'
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import {AddempService} from './addemp.service';






@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private router: Router,private addservice: AddempService) { }

  // [x: string]: any;

  addemp = new employee();


  @ViewChild("password")
  public textbox!: TextBoxComponent;



  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
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

  public Signup(): void {
    this.forms.markAllAsTouched();
  }
  public clearForm(): void {
    this.forms.reset();
  }










  onAdd()  {
    console.log(this.forms.value);

  if(this.forms.valid){
    console.log(this.forms.value);

    this.addservice.addsignup(this.forms.value).subscribe((response:any)  => {

console.warn(this.forms.value);


      alert("You have created account please login");

    })
  }else{
    alert('Provide valid data ')
  }
  }


  ngOnInit(){



  }
 
}
