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
  public livro: Livro = new Livro(0, 0, '', '', ['']);
  public selectedEditora: number = 0; 
  public editoraSelecionada: string = ''; 
  
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(event: Event): void {
    event.preventDefault();
    this.livro.codEditora = this.selectedEditora;
    this.livro.autores = this.autoresForm.split('\n');
    
    const editora: Editora = {
      codEditora: this.selectedEditora,
      nome: this.editoraSelecionada
    };
    
    this.servEditora.setEditora(editora);
    
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }

  atualizarNomeEditora(): void {
    this.editoraSelecionada = this.servEditora.getNomeEditora(this.selectedEditora);
  }
}
