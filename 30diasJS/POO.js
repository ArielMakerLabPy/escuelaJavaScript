const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados:[
        'Curso Definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS'
    ],
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
};

natalia.aprobarCurso('Curso de CSS Grid');

console.log(natalia);
//Hacer que Natalia apruebe otros cursos
natalia.cursosAprobados.push('Curso de Responsive Design');

console.log(natalia);

function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}
Student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    'Juanita Alejandra',
    15,
    [
        'Curso de introducción a la producción de video juegos',
        'Curso de creación de personaje'
    ]
);

juanita.aprobarCurso('Curso de Unreal Engine');

console.log(juanita);

console.log(juanita instanceof Student);

