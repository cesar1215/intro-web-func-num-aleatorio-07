# Lab: Parametros y Argumentos

## Objetivos
- Crear funciones y declaraciones condicionales
- Seleccionar elementos utilizando `.querySelector()`
- Cambiar el estilo de un elemento utilizando `.style`

## Introducción
Hemos aprendido que un parámetro es una variable dentro de una función. El parámetro llevará el valor del argumento que se pase a la función cuando ésta sea invocada. Por ejemplo:

```
function aleatorio(min, max) {
    return min + max
}
```

Es hora de poner en práctica nuestros aprendizajes. 

### Funcionalidad del Código

En éste lab harás que `bird` aparezca en lugares aleatorios cada que cargues el archivo `index.html`

## Instrucciones
Bifurca (fork) y clona (clone) este lab en tu entorno local. Navega a su directorio en la terminal, luego ejecuta el comando `code .` para abrir sus archivos en Visual Studio Code. 


1. Crea la función `aleatorio()` que tenga dos parámetros: `min` y `max`. La función debe DEVOLVER (`return`) un valor aleatorio entre los valores de `min` y `max`.


2. Crea la función `dibujarBird()`.  Al llamar a la función:
- Asigna a `birdBottom` el resultado obtenido al llamar a la función `aleatorio` con parametros `10` (como `min`) y `570` (como `max`)
- El valor de la propiedad `bottom` de `bird` debe ser el nuevo valor de `birdBottom + 'px'`
- El valor de la propiedad `left` de `bird` debe ser `'250px'`


3. Crea una función `iniciar()`. Al llamar a la función `iniciar()`:
- Se debe de llamar a la función `dibujarBird()`

4. Llama a la función `iniciar()`


