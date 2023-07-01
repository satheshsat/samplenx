import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgChartjsModule } from 'ng-chartjs';

@NgModule({
    declarations: [
      DashboardComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgChartjsModule,
      RouterModule.forChild([
        {
          path: '',
          component: DashboardComponent,
        },
      ])
    ],
    bootstrap: []
  })
  export class DashboardModule { }