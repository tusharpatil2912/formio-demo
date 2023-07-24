import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InOutFormComponent } from './in-out-form/in-out-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: InOutFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
