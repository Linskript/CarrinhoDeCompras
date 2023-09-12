import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarprodutosPageRoutingModule } from './cadastrarprodutos-routing.module';

import { CadastrarprodutosPage } from './cadastrarprodutos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastrarprodutosPageRoutingModule
  ],
  declarations: [CadastrarprodutosPage]
})
export class CadastrarprodutosPageModule {}
