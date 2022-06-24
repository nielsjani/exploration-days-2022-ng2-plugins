import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HatoolLibModule} from "hatool";
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, ChartsComponent, HomeComponent, TreesComponent, ChatbotComponent,UserIdleComponent } from '@cegeka/home';
import { HttpClientModule } from '@angular/common/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'tree', component: TreesComponent },
  { path: 'user-idle', component: UserIdleComponent },
  {path: 'chatbot', component: ChatbotComponent}
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,
    HatoolLibModule,
    RouterModule.forRoot(routes),
    NgIdleKeepaliveModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
