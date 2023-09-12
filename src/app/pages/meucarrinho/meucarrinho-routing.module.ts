import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeucarrinhoPage } from './meucarrinho.page';

const routes: Routes = [
  {
    path: '',
    component: MeucarrinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeucarrinhoPageRoutingModule {}
