import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-excluirprodutos',
  templateUrl: './excluirprodutos.page.html',
  styleUrls: ['./excluirprodutos.page.scss'],
})
export class ExcluirprodutosPage implements OnInit {
idProdDelete = ""
  constructor(private firestore : AngularFirestore, private toastController : ToastController) { }

  ngOnInit() {
  }

  DeletaProduto(){
    try {
      this.firestore.doc(`NovosProdutos/${this.idProdDelete}`).delete()
      this.exibeToast("Produto Deletado Com Sucesso", "sucess")
    } catch(erro){
      this.exibeToast("Erro ao deletar produto", "danger")
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
