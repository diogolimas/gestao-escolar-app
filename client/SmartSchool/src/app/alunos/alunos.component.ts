import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos = [
    'Marta',
    'Paulo',
    'Tiago',
    'Diogo',
    'Maath',
    'Pedro',
    'Luiza',
    'Laura',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
