import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import {LoginempService} from '../loginemp.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor( private loginemp: LoginempService,private router: Router) { }

  
  @ViewChild("password")
  public textbox!: TextBoxComponent;

  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = "password";
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }

  public forms: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  // public login(): void {
  //   this.forms.markAllAsTouched();
  // }

  login() {

    if(this.forms.valid){
      this.loginemp.loginur(this.forms.value).subscribe((response:any)  => {
     alert('Login Successfully')
     this.router.navigate(['/employee']);
     
  console.warn(this.forms.value);

        // console.warn(this.addStudent);
        // this.addStudent.username = null
        // this.addStudent.email = null
        // this.addStudent.password =

      })
    }else{
      alert('Provide valid data ')
    }
    }


  public clearForm(): void {
    this.forms.reset();
  }
}
