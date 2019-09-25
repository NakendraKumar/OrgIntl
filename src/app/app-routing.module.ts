import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { AppComponent } from './app.component';
import { GraphComponent } from './core/graph/graph.component';
import { HomeComponent } from './core';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'graph',
    component: GraphComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
