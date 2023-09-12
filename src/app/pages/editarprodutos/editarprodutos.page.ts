import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editarprodutos',
  templateUrl: './editarprodutos.page.html',
  styleUrls: ['./editarprodutos.page.scss'],
})
export class EditarprodutosPage implements OnInit {
  produtoEditado : FormGroup;
  idEdit = " ";
  
    constructor(private formatos: FormBuilder, private firestore: AngularFirestore,private toastController: ToastController) {
   this.produtoEditado = this.formatos.group({
    tipoProduto :      ['', Validators.required],
    nomeProduto :      ['', Validators.required],
    valorProduto :     ['', Validators.required, Validators.pattern('^[0-9]*$')],
    descricaoProduto : ['', Validators.required],
    freteGratis :      ['false', Validators.required]
   });
    }

  ngOnInit(){}
  
  editaForm(){
    if (this.produtoEditado.valid) {
      const dadosEdit = this.produtoEditado.value;
      this.firestore.doc(`NovosProdutos/${this.idEdit}`).update(dadosEdit)
        .then(() => {
          console.log('Produto Editado Com Sucesso');
          this.exibeToast('Produto Editado Com Sucesso', 'sucess')
        })
        .catch(error => {
          console.error('Erro Ao Editar Produto', error);
          this.exibeToast('Erro Ao Editar Produto', 'danger')
        });
    }
  }

  async exibeToast(mensagem: string, color: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500,
      position: 'bottom',
      color: color
    });
    await toast.present();
  }
  }
  
