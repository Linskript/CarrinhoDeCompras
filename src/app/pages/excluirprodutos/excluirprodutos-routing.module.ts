import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcluirprodutosPage } from './excluirprodutos.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluirprodutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcluirprodutosPageRoutingModule {}
