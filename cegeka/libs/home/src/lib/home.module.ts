import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { TreesComponent } from './tree/trees.component';
import { TreeModule } from '@circlon/angular-tree-component';

@NgModule({
  imports: [CommonModule, NgChartsModule, TreeModule],
  declarations: [HomeComponent, AboutComponent, ChartsComponent, TreesComponent],
  exports: [HomeComponent, AboutComponent, ChartsComponent, TreesComponent],
})
export class HomeModule {}
