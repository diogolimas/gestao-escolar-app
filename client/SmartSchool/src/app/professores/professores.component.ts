import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo =  'Professores';

  public professores =[
    {'nome': 'francisco'},
    {'nome': 'francisco1'},
    {'nome': 'francisco2'},
    {'nome': 'francisco3'},
    {'nome': 'francisco4'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
