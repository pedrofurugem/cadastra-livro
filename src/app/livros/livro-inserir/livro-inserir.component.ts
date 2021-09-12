import { Component, EventEmitter, Output } from '@angular/core'
import { Livro } from '../livro.model';

@Component({
  selector:'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css'],
})

export class LivroInserirComponent{
  @Output() livroCadastrado = new EventEmitter();
  id: number;
  titulo: string;
  autor: string;
  paginas: number;

  onLivroCadastrado(){ //uma forma de testar se o botão funciona
    const livro: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      paginas: this.paginas,
    };
      this.livroCadastrado.emit(livro);
  }
}
