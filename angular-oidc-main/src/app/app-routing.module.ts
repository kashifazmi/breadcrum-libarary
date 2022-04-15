import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHandlerComponent } from './admin-handler/admin-handler.component';
import { HomeComponent } from './home-component/home.component';
import { LoginCallbackComponent, LogoutCallbackComponent, SilentCallbackComponent } from './oidc/components';
import { AuthGuard } from './oidc/guards';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        component: HomeComponent
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
      }
    ]
  },
  {
    path: 'admin',
    data: {
      breadcrumb: 'admin'
    },
    component: AdminHandlerComponent
  },
  {
    path: 'login-callback',
    component: LoginCallbackComponent,
  },
  {
    path: 'logout-callback',
    component: LogoutCallbackComponent,
  },
  {
    path: 'silent-callback',
    component: SilentCallbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
