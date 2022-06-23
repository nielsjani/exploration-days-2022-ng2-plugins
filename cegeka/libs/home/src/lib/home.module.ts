import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, AboutComponent],
  exports: [HomeComponent, AboutComponent],
})
export class HomeModule {}
