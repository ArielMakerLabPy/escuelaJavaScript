# Curso definitivo de HTML y CSS
## Web developer fundamentals

### Qué aprenderás sobre HTML y CSS

### ¿Qué es el frontend?

### ¿Qué es el backend?

### ¿Qué es fullstack?

### Páginas estáticas vs dinámicas

## HTML

### HTML: anatomía de una página web

### Index y su estructura básica: head

### Index y su estructura básica: body

### Reto: crear tu lista de compras del supermercado

### Anatomía de una etiqueta de HTML

## Etiquetas multimedia

### Tipos de imágenes

### Optimización de imágenes

#### Páginas a utilizar para optimizar imágenes

Comprime el tamaño de una imagen [Tiny PNG](https://tinypng.com/)

Elimina los metadatos de una imagen [Verefix](https://www.verexif.com/)

### Etiqueta img

### Etiqueta figure

### Etiqueta video

## Formularios

### Etiqueta form e input

### Calendar

### Autocomplete y require

### Select

### Input type submit vs button tag

## CSS

### ¿Qué es CSS?

### ¿Cómo utilizamos CSS?: por etiqueta, selector, class y por ID

### Pseudo clases y pseudo elementos

### Anatomia de una regla de CSS

### Modelo de caja

### Herencia

### Especificidad de selectores

### Demo de especificidad y orden en selectores

### Más sobre selectores

### Combinadores: Adjacent siblings (combinators)

### Combinadores: General Sibling

### Combinadores: Hijo y descendiente

### Medidas

### Medidas EM

### Medidas REM

### Max/Min width

### Position

### Display

### Desafio: Layout 1

### Display Flex

Display Flex o Flexbox

### Flexbox layouts

Se puede usar order en cada caja hijo para ir ordenando. Los que no tengan order se colocan siempre hacia la izquierda en el orden colocado en HTML y los que tengan order empiezan desde la izquierda y van hacia la derecha en el orden especificado en order.
Con flex-grow se rellena el espacio para completar la caja padre, se coloca dentro de la caja hijo que se quiera aumentar de tamaño

### Variables

### Web fonts

## Responsive design

### Responsive design: media queries

### Estrategias de responsive: mostly fluid

### Implementando mostly fluid

### Layout shifter CSS

### Column drop

### Buenas prácticas y ejemplos de responsive

### Imágenes responsive

## Accesibilidad

### Semántica

### Textos

### Labels, alt y title

## Proximos pasos

### Proximos pasos como Web Developer

### Bonus: table de etiquetas HTML

main: etiqueta de HTML que se utiliza como contenedor del contenido principal

Los !important estarán por encima de los demás estilos. Sin embargo, son mala práctica y no se deberían usar.
Los estilos embebidos en el HTML, es decir inline styles están por encima de las clases y IDs. Sin embargo, también se deberían evitar.
Los IDs están por encima de las clases. Los IDs son específicos, si se usa uno en un archivo HTML ya no se podrá repetir más en ese mismo archivo. Mientras que las clases si se pueden repetir en cualquier elemento.
Un estilo de etiqueta es el último valor que el navegador tiene en cuenta antes de tomar los estilos por defecto de esa etiqueta. Los estilos de etiqueta son los que menos peso tienen.

Orden correcto de declaraciones en CSS: Important-Inline-id-class-etiqueta

Al utilizar Display Flex, se puede alinear vertical los elementos hijos con; Flex-direction: column;


Flex-direction: Te permite elegir la alineación de los elementos hijos sea en vertical (column) u horizontal (row), esta alineación viene por defecto.

Justify-content: Esta propiedad nos permite alinear el contenido de forma horizontal
Valores:

    Flex-start: Alinear items del flex desde el comienzo.
    Flex-end: Alinear items desde el final.
    Center: Alinear items en el centro del contenedor.
    Space-between: Distribuir items uniformemente, el primer items al inicio, el último al final.
    Space-around: Distribuir items uniformemente, estos tienen el mismo espacio a su alrededor.
    Space-evenly: Distribuye uniformemente el espacio entre los items y su alrededor.

Flex-wrap: Permite que un elemento cuyo tamaño sea mayor al de la página haga un salto de línea sin salirse del contenedor, pues este se agranda.

Diferencia entre display block e Inline

Block: Estos toman el 100% del width, por lo que un elemento no puede posicionarse a un lado de el.
Se le puede poner el width deseado, height deseado, añadir margin, padding sin problema. Pero recordando que ocupara este elemento todo el largo de una Fila por asi decirlo.

Inline: Estos elementos solo ocuparan el ancho dependiento de su contenido. Por lo tanto estos elementos si permiten que si un elemento cabe a lado suyo, se posicione este ahi.
Las *desventajas es que no se les puede modificar el width, height, ni colocar margin u padding tanto top, como bottom.

inline-block: Este tiene la combinación de los 2 anteriores. Haciéndolo un mejor candidato para usarlo.
Permite modificar su width, height, añadirle margin, padding sin problemas y lo mejor es que mientras que haya espacio a un lado suyo, este permitirá posicionar mas elementos ahi.

automplete=“on” 

