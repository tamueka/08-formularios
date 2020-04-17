import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesComponent } from './pages/templates/templates.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [
  { path: 'template', component: TemplatesComponent },
  { path: 'reativo', component: ReactiveComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'template' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
