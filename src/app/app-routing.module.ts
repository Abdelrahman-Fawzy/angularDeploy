import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ComponentFromCliComponent } from './component-from-cli/component-from-cli.component';

const routes: Routes = [
  {
    path: 'binding',
    component: BindingComponent
  },
  {
    path: 'cli',
    component: ComponentFromCliComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
