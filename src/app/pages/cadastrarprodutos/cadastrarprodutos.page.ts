import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrarprodutos',
  templateUrl: './cadastrarprodutos.page.html',
  styleUrls: ['./cadastrarprodutos.page.scss'],
})
export class CadastrarprodutosPage implements OnInit {
  produto : FormGroup;
  
    constructor(private formatos: FormBuilder, private firestore: AngularFirestore, private toastController: ToastController) {
   this.produto = this.formatos.group({
    idProduto :        ['', Validators.required],
    tipoProduto :      ['', Validators.required],
    nomeProduto :      ['', Validators.required],
    valorProduto :     ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    descricaoProduto : [''],
    freteGratis :      ['false', Validators.required]
   });
    }
  ngOnInit(){}
  
  cadastraForm(){
    if (this.produto.valid) {
      const id = this.produto.get('idProduto')!.value
      const dados = this.produto.value;
      this.firestore.doc(`NovosProdutos/${id}`).set(dados)
        .then(() => {
          this.exibeToast("Produto Cadastrado Com Sucesso", "sucess")
          console.log('Produto Cadastrado Com Sucesso');
        })
        .catch(error => {
          this.exibeToast("Erro Ao Cadastrar Produto", "danger")
          console.error('Erro Ao Cadastrar Produto', error);
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
  