import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeucarrinhoPageRoutingModule } from './meucarrinho-routing.module';

import { MeucarrinhoPage } from './meucarrinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeucarrinhoPageRoutingModule
  ],
  declarations: [MeucarrinhoPage]
})
export class MeucarrinhoPageModule {}
