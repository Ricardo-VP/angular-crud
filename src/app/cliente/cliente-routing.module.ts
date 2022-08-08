import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'cliente', redirectTo: 'cliente/index', pathMatch: 'full' },
  { path: 'cliente/index', component: IndexComponent },
  { path: 'cliente/:clienteId/view', component: ViewComponent },
  { path: 'cliente/create', component: CreateComponent },
  { path: 'cliente/:clienteId/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
