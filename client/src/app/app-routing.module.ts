import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { PromptComponent } from './prompt/prompt.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'prompt', component: PromptComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    // canActivate: [AuthGuard],
  },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '/prompt' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
