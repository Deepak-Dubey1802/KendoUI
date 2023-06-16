import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import {Routes,RouterModule} from "@angular/router";
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BarcodesComponent } from './add-employee/barcodes/barcodes.component';
import { BarcodesModule } from "@progress/kendo-angular-barcodes";
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { ProductsComponent } from './products/products.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';













@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    BarcodesComponent,
    ProductsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    DateInputsModule,
    LabelModule,
    InputsModule,
    LayoutModule,
    ButtonsModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DialogsModule,
    BarcodesModule,
    ExcelExportModule,
    PDFExportModule,
    IntlModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
