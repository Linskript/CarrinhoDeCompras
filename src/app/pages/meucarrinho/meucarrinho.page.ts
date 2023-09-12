import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-meucarrinho',
  templateUrl: './meucarrinho.page.html',
  styleUrls: ['./meucarrinho.page.scss'],
})
export class MeucarrinhoPage implements OnInit {
  private collectionName = 'ProdutosComprados';
  private documentsCollection: AngularFirestoreCollection<any>;
  documentList: any[] = []; 

  constructor(private firestore: AngularFirestore) {
    this.documentsCollection = this.firestore.collection<any>(this.collectionName);
  }

  ngOnInit(): void {
    this.documentsCollection.valueChanges().subscribe((data) => {
      this.documentList = data;
    });
  }
}