import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about/about.component';
import {GoalsComponent} from './goals/goals.component';
import {GoalDetailComponent} from './goals/goal-detail/goal-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: GoalsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'goal/:id', component: GoalDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
