import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { TreesComponent } from './tree/trees.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { TreeModule } from '@circlon/angular-tree-component';
import { HatoolLibModule } from 'hatool';
import { UserIdleComponent } from './user-idle/user-idle.component';
import { PijpenComponent } from './pijpen/pijpen.component';
import { NgPipesModule } from 'ngx-pipes';
import { InfiniscrollComponent } from './infiniscroll/infiniscroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    NgChartsModule,
    TreeModule,
    HatoolLibModule,
    NgPipesModule,
    InfiniteScrollModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ChartsComponent,
    TreesComponent,
    UserIdleComponent,
    ChatbotComponent,
    PijpenComponent,
    InfiniscrollComponent,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ChartsComponent,
    TreesComponent,
    ChatbotComponent,
    UserIdleComponent,
    PijpenComponent,
    InfiniscrollComponent,
  ],
})
export class HomeModule {}
