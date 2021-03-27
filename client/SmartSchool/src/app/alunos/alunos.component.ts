import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'alunos'
  public alunos = [
    {'id': 1, 'nome': 'Marta', 'sobrenome': '', 'telefone': 1414214214},
    {'id': 2, 'nome':'Paulo', 'sobrenome': '', 'telefone': 1414214214},
    {'id': 3, 'nome':'Tiago', 'sobrenome': '', 'telefone': 1414214214},
    {'id': 4, 'nome':'Diogo', 'sobrenome': '', 'telefone': 1414214214},
    {'id': 5, 'nome':'Maath', 'sobrenome': '', 'telefone': 1414214214},
    {'id': 6, 'nome':'Pedro', 'sobrenome': '', 'telefone': 1414214214},
    {'id': 7, 'nome':'Luiza', 'sobrenome': '', 'telefone': 1414214214},
    {'id': 8, 'nome':'Laura', 'sobrenome': '', 'telefone': 1414214214},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
