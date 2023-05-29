import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { AppComponent } from './app.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';



@NgModule({
  declarations: [
    LivroDadosComponent,
    LivroListaComponent,
    AppComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
    
  ],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
