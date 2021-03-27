import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'alunos'
  public alunos = [
    {'nome': 'Marta'},
    {'nome':'Paulo'},
    {'nome':'Tiago'},
    {'nome':'Diogo'},
    {'nome':'Maath'},
    {'nome':'Pedro'},
    {'nome':'Luiza'},
    {'nome':'Laura'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
