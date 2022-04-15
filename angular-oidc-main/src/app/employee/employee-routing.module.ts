import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'employee'
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null
        },
        component: AllEmployeeComponent,
      },
      {
        path: 'get-employee',
        data: {
          breadcrumb: 'GetEmployee'
        },
        component: GetEmployeeComponent
      },
      {
        path: 'add-employee',
        data: {
          breadcrumb: 'AddEmployee'
        },
        component: AddEmployeeComponent,
      },
      {
        path: 'delete-employee',
        data: {
          breadcrumb: 'DeleteEmployee'
        },
        component: DeleteEmployeeComponent,
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
