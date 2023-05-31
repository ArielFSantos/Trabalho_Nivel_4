import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  
  public livro: Livro = new Livro(0,0,'','',[]);
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(event: Event): void {
    event.preventDefault();
    const autores = this.autoresForm.split('\n');
  
    const novoLivro: Livro = {
      codigo: this.servLivros.livros.reduce((max, l) => (l.codigo > max ? l.codigo : max), 0) + 1,
      codEditora: this.livro.codEditora,
      titulo: this.livro.titulo,
      resumo: this.livro.resumo,
      autores: autores
    };
  
    this.servLivros.incluir(novoLivro);
  
    this.router.navigateByUrl('/lista');
  }
  
}
