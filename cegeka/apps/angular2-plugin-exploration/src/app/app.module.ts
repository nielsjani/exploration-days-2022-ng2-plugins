import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent, HomeComponent, PijpenComponent, TreesComponent, UserIdleComponent } from '@cegeka/home';
import { HttpClientModule } from '@angular/common/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'tree', component: TreesComponent },
  { path: 'user-idle', component: UserIdleComponent },
  { path: 'pipes', component: PijpenComponent }
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule, NgIdleKeepaliveModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
