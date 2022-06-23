import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, AboutComponent, ChartsComponent],
  exports: [HomeComponent, AboutComponent, ChartsComponent],
})
export class HomeModule {}
