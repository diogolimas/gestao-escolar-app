namespace SmartSchool_WebAPI.Models
{
    public class Disciplina
    {
        public Disciplina()
        {
        }

        public Disciplina(int id, string nome, int profesorId, Professor professor)
        {
            this.id = id;
            this.nome = nome;
            ProfesorId = profesorId;
            Professor = professor;
        }

        public int id {get;set;}
        public string nome {get;set;}
        public int ProfesorId {get;set;}
        public Professor Professor {get;set;}
    }
}
