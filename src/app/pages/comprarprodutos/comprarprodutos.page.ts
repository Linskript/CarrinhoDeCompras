import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-comprarprodutos',
  templateUrl: './comprarprodutos.page.html',
  styleUrls: ['./comprarprodutos.page.scss'],
})
export class ComprarprodutosPage implements OnInit {
  private collectionName = 'NovosProdutos';
  private documentsCollection: AngularFirestoreCollection<any>;
  documentList: any[] = []; 

  constructor(private firestore: AngularFirestore, private toastController: ToastController) {
    this.documentsCollection = this.firestore.collection<any>(this.collectionName);
  }

  ngOnInit(): void {
    this.documentsCollection.valueChanges().subscribe((data) => {
      this.documentList = data;
    });
  }

  async ComprarProduto(produto: any){
    try{
      this.exibeToast("Compra Realizada Com Sucesso! Verifique Seu Carrinho.", "sucess")
    return this.firestore.collection('ProdutosComprados').add(produto);
    } catch(erro) {
    console.error('Erro no compra, tente novamente', erro)
    this.exibeToast("Erro no compra, tente novamente", "danger")
    return
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
