import { Component, OnInit } from '@angular/core';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  contato = {id: '', nome: '', telefone:''};
  agenda = [{id: '', nome: '', telefone:''}];
  operacao: Boolean = true;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.agendaService.listarTodos().subscribe(resposta => this.agenda = <any> resposta);
  }
  
  adicionar(){
    this.agendaService.adicionar(this.contato).subscribe( resposta => {
      this.contato = {id: '', nome: '', telefone:''};
      this.consultar();
    });
  }

  excluir(id: any){
    this.agendaService.excluir(id).subscribe( resposta => {
      this.consultar();
    });
  }

  editar(id: any){
    this.agendaService.buscar(id).subscribe( resposta => {
      this.contato = <any> resposta;
      this.operacao = false;
       });    
  }
  
  atualizar(){
    this.agendaService.atualizar(this.contato).subscribe( () => {
      this.contato = {id: '',nome: '', telefone:''};
      this.operacao = true;
      this.consultar();
    })
  }

}
