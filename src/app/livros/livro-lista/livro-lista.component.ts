import { Component, Input } from '@angular/core';
import { Livro } from '../livro.model';
@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {

  @Input() livros: Livro[] = [];
    /*{
      id: 1,
      titulo: 'Sherlock Holmes',
      autor: 'Arthur Conandoile',
      paginas: 527,
    },
    {
      id: 2,
      titulo: 'evolução das especies',
      autor: 'Darwin',
      paginas: 627,
    },
  ]*/


}
