import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunoSelecionado: Aluno = {} as Aluno; 
  public textSimple!: string;

  public alunos = [
    {'id': 1, 'nome': 'Marta', 'sobrenome': 'De Oliveira', 'telefone': 1414214214},
    {'id': 2, 'nome':'Paulo', 'sobrenome': 'De Silva', 'telefone': 1414214214},
    {'id': 3, 'nome':'Tiago', 'sobrenome': 'De Campos', 'telefone': 1414214214},
    {'id': 4, 'nome':'Diogo', 'sobrenome': 'De Lima', 'telefone': 1414214214},
    {'id': 5, 'nome':'Maath', 'sobrenome': 'De Carossela', 'telefone': 1414214214},
    {'id': 6, 'nome':'Pedro', 'sobrenome': 'De Jerli', 'telefone': 1414214214},
    {'id': 7, 'nome':'Luiza', 'sobrenome': 'De Almeida', 'telefone': 1414214214},
    {'id': 8, 'nome':'Laura', 'sobrenome': 'Dur Garçon', 'telefone': 1414214214},
  ];

  alunoSelect(aluno: Aluno)
  {
    this.alunoSelecionado = aluno;
    
  }

  voltar()
  {
    this.alunoSelecionado = {} as Aluno; 
  }


  constructor() { }

  ngOnInit(): void {
    console.log(this.alunoSelecionado)
  }

}
