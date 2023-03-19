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

// Prototipos con las sintaxis de CLASES 

class Student2 {
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2(
    'Miguel',
    22,
    [
        'Curso Analisis de Negocios para ciencia de datos',
        'Curso de Principios de visualización de Datos para BI',

    ]
)

console.log(miguelito);
console.log(miguelito instanceof Student2);


const juan1 = {
    name: 'Juan DC',
    username: 'juandc',
    points: 100,
    socialMedia: {
        twitter: 'fjuandc',
        instagram: 'fjuandc',
        facebook: undefined,
    },
    approvedCourses: [
        'Curso definitivo de HTML y CSS',
        'Curso práctico de HTML y CSS',
    ],
    learningPaths: [
        {
            name: 'Escuela de Desarrollo web',
            courses: [
                'Curso definitivo de HTML y CSS',
                'Curso práctico de HTML y CSS',
                'Curso de Responsive design'
            ], 
        },
        {
             name: 'Escuela de Videojuegos',
            courses: [
                'Curso Introducción a la producción de videojuegos',
                'Curso de Unreal Engine',
                'Curso de Unity 3D'
            ], 
        },
    ]
}

const miguelito1 = {
    name: 'Miguelito',
    username: 'miguelitofeliz',
    points: 1000,
    socialMedia: {
        twitter: 'miguelitofeliz',
        instagram: 'miguelito_feliz',
        facebook: undefined,
    },
    approvedCourses: [
        'Curso de databusiness',
        'Curso de data visualización',
    ],
    learningPaths: [
        {
            name: 'Escuela de Desarrollo web',
            courses: [
                'Curso definitivo de HTML y CSS',
                'Curso práctico de HTML y CSS',
                'Curso de Responsive design'
            ], 
        },
        {
             name: 'Escuela de Data Science',
            courses: [
                'Curso de DataBusiness',
                'Curso de data visualización',
                'Curso de tableau',

            ], 
        },
    ]
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Student {
    constructor({
       name,
       email,
       username,
       twitter = undefined,
       instagram = undefined,
       facebook = undefined,
       approvedCourses = [],
       learningPath = [],

    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }
}

class Course{
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasic = new Course({
    name: 'Curso Gratis de Programación Básica',
    
})

class LearningPath {
  constructor(name, courses) {
    this.name = name;
    this.courses = courses;
  }

  // Puedes agregar otros métodos o propiedades aquí
}

const escuelaDeDesarrolloWeb = new LearningPath(
  "Escuela de Desarrollo web",
  [
    "Curso definitivo de HTML y CSS",
    "Curso práctico de HTML y CSS",
    "Curso de Responsive design"
  ]
);

const escuelaDeDataScience = new LearningPath(
  "Escuela de Data Science",
  [
    "Curso de DataBusiness",
    "Curso de data visualización",
    "Curso de tableau"
  ]
);

const escuelaDeVideojuegos = new LearningPath(
  "Escuela de Videojuegos",
  [
    "Curso Introducción a la producción de videojuegos",
    "Curso de Unreal Engine",
    "Curso de Unity 3D"
  ]
);

const juan2 = new Student({
    name: 'JuanDC',
    username: 'juandc',
    email: 'juanito@juanito.com',
    twitter: 'fjuandc',
    learningPath: [
        escuelaDeDesarrolloWeb,
        escuelaDeVideojuegos,
    ]
});

const miguelito2 = new Student({
    name: 'Miguelito',
    username: 'miguelitofeliz',
    email: 'miguelito@juanito.com',
    instagram: 'miguelito',
    learningPath: [
        escuelaDeDesarrolloWeb,
        escuelaDeDataScience,
    ]

});


console.log(juan2);
console.log(miguelito2);


