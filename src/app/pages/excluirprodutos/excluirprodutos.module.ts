import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcluirprodutosPageRoutingModule } from './excluirprodutos-routing.module';

import { ExcluirprodutosPage } from './excluirprodutos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcluirprodutosPageRoutingModule
  ],
  declarations: [ExcluirprodutosPage]
})
export class ExcluirprodutosPageModule {}
