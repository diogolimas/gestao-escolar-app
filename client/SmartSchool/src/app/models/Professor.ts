export class Professor {
    id?: number;    
    public nome: string;
    public disciplina: string;

    constructor (nome: string, disciplina: string) {
        this.nome = nome;
        this.disciplina = disciplina;
     }
}