import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild([
        {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
        },
        {
          path: 'login',
          component: LoginComponent,
        },
      ])
    ],
    bootstrap: []
  })
  export class AuthModule { }