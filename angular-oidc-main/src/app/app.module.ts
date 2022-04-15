import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home.component';
import { NgAuthModule } from './oidc/ng-auth.module';
import { AdminHandlerComponent } from './admin-handler/admin-handler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TraBreadcrumbComponent } from './tra-breadcrumb/tra-breadcrumb.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
// import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHandlerComponent,
    HeaderComponent,
    TraBreadcrumbComponent,
    BreadcrumbComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
