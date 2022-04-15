import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    GetEmployeeComponent,
    DeleteEmployeeComponent,
    AllEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
