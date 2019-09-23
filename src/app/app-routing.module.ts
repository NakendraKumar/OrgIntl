import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', component: LayoutComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
