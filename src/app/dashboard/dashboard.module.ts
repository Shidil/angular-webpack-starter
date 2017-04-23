import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HomeComponent, DashboardItemComponent],
  exports: [HomeComponent]
})
export class DashboardModule { }
