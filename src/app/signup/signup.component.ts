import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { SignupempService } from './signupemp.service';
import { signup } from './Model/signup'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router: Router,private signupemp: SignupempService) { }

  [x: string]: any;

  addsignup = new signup();


  @ViewChild("password")
  public textbox!: TextBoxComponent;



  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }

   forms: FormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    addressline: new FormControl(),
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

    this.signupemp.addsignup(this.forms.value).subscribe((response:any)  => {

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
