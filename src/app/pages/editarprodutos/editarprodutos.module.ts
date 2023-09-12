import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarprodutosPageRoutingModule } from './editarprodutos-routing.module';

import { EditarprodutosPage } from './editarprodutos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditarprodutosPageRoutingModule
  ],
  declarations: [EditarprodutosPage]
})
export class EditarprodutosPageModule {}
