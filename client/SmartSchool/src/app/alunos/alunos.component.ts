import { Component, OnInit,TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';




@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {


  public alunoForm!: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno = {} as Aluno; 
  public textSimple: string = "testando two way databinding";
  public modalRef!: BsModalRef;

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

 
  constructor(
        private fb: FormBuilder, 
        private modalService: BsModalService) { 
    this.criarForm();

  }

  ngOnInit(): void {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
    }


    alunoSubmit() {
     console.log(this.alunoForm.value);
    }
   
  alunoSelect(aluno: Aluno)
  {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar()
  {
    this.alunoSelecionado = {} as Aluno; 
  }

 

}
