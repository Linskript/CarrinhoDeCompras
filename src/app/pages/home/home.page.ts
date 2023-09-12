import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
produto : FormGroup;
proximoId!: number;

  constructor(private formatos: FormBuilder, private firestore: AngularFirestore) {
 this.produto = this.formatos.group({
  idProduto :        ['', Validators.required],
  tipoProduto :      ['', Validators.required],
  nomeProduto :      ['', Validators.required],
  valorProduto :     ['', Validators.required],
  descricaoProduto : ['', Validators.required],
  freteGratis :      ['false', Validators.required]
 });

 this.firestore.collection('NovosProdutos')
      .get()
      .subscribe(querySnapshot => {
        this.proximoId = querySnapshot.size + 1;
      });
  }

cadastraForm(){
  const usuarioId = this.proximoId;
  if (this.produto.valid) {
    const id = this.produto.get('idProduto')!.value
    const dados = this.produto.value;
    this.firestore.doc(`NovosProdutos/${id}`).set(dados)
      .then(() => {
        console.log('Produto Cadastrado Com Sucesso');
        location.reload();
      })
      .catch(error => {
        console.error('Erro Ao Cadastrar Produto', error);
      });
  }
}
}
