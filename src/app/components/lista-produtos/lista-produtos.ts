import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import{ MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-lista-produtos',
 imports: [Produto, MatButtonModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = [
    { nome: 'Notebook', preco: 3800 },
    { nome: 'Mouse', preco: 179 },
  ];

  exibirProduto(nome: string) {
    console.log('Produto selecionado:', nome);
    // Aqui você pode atualizar o estado, abrir modal, etc.
  }
}
