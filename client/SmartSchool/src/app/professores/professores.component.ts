import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo =  'Professores';
  public professorSelecionado: Professor = {} as Professor; 
  public professores = [
    { 'id': 1, 'nome': 'francisco', 'disciplina': 'Matemática'},
    { 'id': 2, 'nome': 'francisco1', 'disciplina': 'Inglês'},
    { 'id': 3, 'nome': 'francisco2', 'disciplina': 'Biologia'},
    { 'id': 4, 'nome': 'francisco3', 'disciplina': 'Filosofia da Ciência'},
    { 'id': 5, 'nome': 'francisco4', 'disciplina': 'Sociología del trabajo'},
  ]
  professorSelect(professor: Professor)
  {
    this.professorSelecionado = professor;
    
  }

  voltar()
  {
    this.professorSelecionado = {} as Professor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
