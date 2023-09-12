import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'meucarrinho',
    loadChildren: () => import('./pages/meucarrinho/meucarrinho.module').then( m => m.MeucarrinhoPageModule)
  },
  {
    path: 'excluirprodutos',
    loadChildren: () => import('./pages/excluirprodutos/excluirprodutos.module').then( m => m.ExcluirprodutosPageModule)
  },
  {
    path: 'comprarprodutos',
    loadChildren: () => import('./pages/comprarprodutos/comprarprodutos.module').then( m => m.ComprarprodutosPageModule)
  },
  {
    path: 'cadastrarprodutos',
    loadChildren: () => import('./pages/cadastrarprodutos/cadastrarprodutos.module').then( m => m.CadastrarprodutosPageModule)
  },
  {
    path: 'editarprodutos',
    loadChildren: () => import('./pages/editarprodutos/editarprodutos.module').then( m => m.EditarprodutosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
