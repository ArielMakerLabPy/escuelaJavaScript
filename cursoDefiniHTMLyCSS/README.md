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

### Flexbox layouts

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