# Curso profesional de git y github
## Git y github
### Introducción a git
#### Qué es un sistema de control de versiones?
El SCV o VCS (version control system) es un sistema de control de versiones que registra los cambios realizados sobre un archivo o conjunto de archivos a lo largo del tiempo, de modo que puedas llevar el historial del ciclo de vida de un proyecto entero a un estado anterior. Cualquier tipo de archivo que se encuentre en un ordenador puede ponerse bajo control de un SCV.
#### Qué es Git?
Git es un SCV distribuido, diseñado por Linus Torvalds, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente. Git está optimizado para guardar todos los cambios de forma atómica e incremental.
Se obtiene su mayor eficiencia con archivo de texto plano, ya que con archivos binarios no puede guardar solo los cambios, sino que debe volver a grabar el archivo completo ante cada modificación, por mínima que sea, lo que hace que incremente demasiado el tamaño del repositorio.      
      **Guardar archivos binarios en el repositorio de git es una mala práctica, solo debería guardarse archivos pequeños (como logos) que no sufran casi modificaciones durante la vida del proyecto. Los binarios deben guardarse en un CDN.**

#### Qué es Github?
Es una plataforma de desarrollo colaborativo (forja) para alojar proyectos utilizando el SCV de git. Se utiliza principalmente para la creación de código fuente de programas de computadora.
Github puede considerarse como la red social de código para los programadores y en muchos casos es visto como tu currículum vitae.
#### Comandos y conceptos básicos de git.
##### Las tres secciones principales de un proyecto git:
- El directorio de git (git Directory, Repository)
- El directorio de trabajo (Working Directory)
- El área de preparación (Staging Area)
##### Staging Area y git Directory
Al ejecutar el comando 'git init' (comando para iniciar un repositorio git) ocurren dos cosas:
- Se crea una carpeta .git el cual es el repositorio local donde git almacena los metadatos y la base de datos de objetos para el proyecto. Es la parte más importante de git, y es lo que se copia cuando clonas un repositorio desde otro ordenador.
- Se crea un archivo sencillo que define el staging area, generalmente está contenido en el directorio de git, que almacena información acerca de lo que va a ir en tu próxima confirmación.
##### Ciclo básico de trabajo en git

