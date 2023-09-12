import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprarprodutosPage } from './comprarprodutos.page';

const routes: Routes = [
  {
    path: '',
    component: ComprarprodutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprarprodutosPageRoutingModule {}
