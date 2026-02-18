# Tailwind CSS Tutorial – README

Este proyecto es una guía interactiva para aprender las utilidades más usadas de **Tailwind** CSS a través de ejemplos visuales y código en tiempo real.[page:1]

## Tabla de contenidos

- [Introducción](#introducción)
- [Grid Layout](#grid-layout)
- [Flex Layout](#flex-layout)
- [Posicionamiento](#posicionamiento)
- [Responsive](#responsive)
- [Espaciado](#espaciado)
- [Colores](#colores)
- [Tipografía](#tipografía)

---

## Introducción

El sitio presenta una introducción a Tailwind CSS y explica que es un framework de utilidades para crear interfaces rápidamente, trabajando directamente con clases en el HTML.[page:1]  
La idea central del tutorial es que el usuario pueda explorar cada concepto, interactuar con ejemplos y observar el código resultante en tiempo real.[page:1]

---

## Grid Layout

La sección **Grid Layout** muestra cómo crear diseños bidimensionales usando el sistema de cuadrícula de Tailwind.[page:1]  
Aquí se trabajan clases típicas de grid para definir columnas, filas, espacios entre elementos y la organización general del layout.[page:1]

Conceptos clave esperados:

- `grid` como contenedor de cuadrícula.
- `grid-cols-*` y `grid-rows-*` para cantidad de columnas y filas.
- `gap-*` para controlar la separación entre celdas.
- Alineación y distribución de elementos dentro de la cuadrícula.

---

## Flex Layout

La sección **Flex Layout** se centra en el uso de contenedores flexibles para alinear y distribuir elementos en una dimensión (horizontal o vertical).[page:1]  
Se muestran ejemplos de cómo manipular el flujo y el espacio entre elementos hijos mediante clases de flexbox.[page:1]

Conceptos clave esperados:

- `flex`, `flex-row`, `flex-col` para definir dirección.
- `justify-*` para distribución horizontal.
- `items-*` para alineación vertical.
- Uso combinado con `gap-*` y tamaños de elementos.

---

## Posicionamiento

En **Posicionamiento** se reunen utilidades de Tailwind para alinear contenido mediante `justify`, `align` y `place` (tanto en flex como en grid).[page:1]  
El foco está en controlar la posición relativa dentro del contenedor y obtener layouts centrados o distribuidos.[page:1]

Conceptos clave esperados:

- `justify-start`, `justify-center`, `justify-between`, etc.
- `items-start`, `items-center`, `items-end`.
- `place-items-*` y `place-content-*` en grid.
- Uso conjunto para centrar contenido total o parcialmente.

---

## Responsive

La sección **Responsive** explica el uso de breakpoints y cómo adaptar los diseños a diferentes tamaños de pantalla.[page:1]  
Se muestra la sintaxis de prefijos responsivos de Tailwind para cambiar propiedades según el ancho del dispositivo.[page:1]

Conceptos clave esperados:

- Prefijos como `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.
- Cambiar columnas de grid o dirección de flex en cada breakpoint.
- Ajuste de tamaños de texto, paddings y márgenes de forma responsiva.

---

## Espaciado

En **Espaciado** se cubren las utilidades de padding, margin y gap para controlar los espacios internos y externos de los elementos.[page:1]  
Se propone experimentar con diferentes valores para entender la escala de espaciado de Tailwind.[page:1]

Conceptos clave esperados:

- `p-*`, `px-*`, `py-*` para padding.
- `m-*`, `mx-*`, `my-*` para margin.
- `gap-*` para separación entre hijos en grid/flex.
- Uso coherente de la escala (por ejemplo `2`, `4`, `6`, etc.).

---

## Colores

La sección **Colores** presenta la paleta de colores y los fondos disponibles en Tailwind CSS.[page:1]  
Se muestran clases para color de texto, fondo y posiblemente bordes, utilizando las tonalidades incluidas en la configuración por defecto.[page:1]

Conceptos clave esperados:

- `text-*` para color de texto (por ejemplo `text-blue-500`).
- `bg-*` para color de fondo.
- `border-*` para color de borde.
- Uso de diferentes tonalidades (`-100` a `-900`) para jerarquía visual.

---

## Tipografía

En **Tipografía** se abordan tamaños, pesos y estilos de texto con utilidades de Tailwind.[page:1]  
El objetivo es aprender a jerarquizar y estilizar texto (títulos, párrafos, destacados) solo con clases de utilidad.[page:1]

Conceptos clave esperados:

- `text-*` para tamaños (`text-sm`, `text-xl`, etc.).
- `font-*` para pesos (`font-light`, `font-bold`, etc.).
- `leading-*` para interlineado y `tracking-*` para espaciado entre letras.
- Clases para alineación de texto y decoración (subrayado, mayúsculas, etc.).

---