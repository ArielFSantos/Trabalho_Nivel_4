import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'O Senhor dos Anéis', resumo: 'Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros.', autores: ['J.R.R. Tolkien'] },
    { codigo: 2, codEditora: 2, titulo: 'Duna', resumo: 'Paul Atreides é um jovem brilhante, dono de um destino além de sua compreensão. Ele deve viajar para o planeta mais perigoso do universo para garantir o futuro de seu povo.', autores: ['Frank Hebert'] },
    { codigo: 3, codEditora: 3, titulo: 'O Iluminado', resumo: 'Jack Torrance se torna caseiro de inverno do isolado Hotel Overlook, nas montanhas do Colorado, na esperança de curar seu bloqueio de escritor. Ele se instala com a esposa Wendy e o filho Danny, que é atormentando por premonições.', autores: ['Stephen King'] },
    { codigo: 4, codEditora: 1, titulo: 'Magisterium: O desafio de ferro (Vol. 1)', resumo: 'Callum Hunt precisa enfrentar o Desafio de Ferro. Um teste para os potenciais alunos do Magisterium, uma renomada escola de magia. Todo mundo faria tudo para ser aceito, mas não Callum. Após tudo que o seu pai lhe contou sobre o lado sombrio da magia, Call está decidido a falhar na prova. Mas parece que alguém está determinado que ele seja bem-sucedido e, apesar de um teste nada promissor, ele se encontra sendo levado para o mesmo lugar que cresceu aprendendo a temer, com uma série de mentiras e segredos sendo trazidos à tona.', autores: ['Cassandra Clare','Holly Black'] }
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigo = this.livros.reduce((max, l) => (l.codigo > max ? l.codigo : max), 0) + 1;
    livro.codigo = codigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}