import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarprodutosPage } from './cadastrarprodutos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarprodutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarprodutosPageRoutingModule {}
