# 🔐 Generador de Nombre de Usuario  
Proyecto del Módulo 3 — Fundamentos de Programación en JavaScript

Este proyecto permite generar un nombre de usuario automáticamente a partir del **nombre** y **apellido** ingresados por el usuario. Combina manipulación de strings con generación de números aleatorios. El resultado se muestra en pantalla dentro de un cuadro estilizado y también mediante un `alert`.

---

## 🚀 Funcionalidades

✔ Solicita al usuario su **nombre** mediante `prompt()`  
✔ Solicita el **apellido** mediante `prompt()`  
✔ Extrae:
- La **primera letra** del nombre  
- Las **tres primeras letras** del apellido  
✔ Convierte todo a **minúsculas**  
✔ Genera un **número aleatorio entre 10 y 99** usando `Math.random()`  
✔ Construye un nombre de usuario con el formato:  
inicial + apellido + número

markdown
Copiar código
Ejemplo: `jgar45`  
✔ Muestra el resultado en:
- Un **alert**
- Un **div** estilizado con Bootstrap y CSS  
✔ Permite generar un nuevo usuario cuantas veces se desee  
✔ Footer fijo con tu nombre en color morado

---

## 🧠 Conceptos Aplicados

### 🔹 JavaScript
- Manipulación de strings:
  - `slice()`
  - `charAt()`
  - `toLowerCase()`
  - concatenación
- Generación aleatoria:
  - `Math.random()`
  - `Math.floor()`
- Eventos DOM:
  - `addEventListener()`
- Manipulación visual:
  - `textContent`
  - `style.display`

### 🔹 HTML
- Estructura de botones, contenedores, títulos
- Integración con Bootstrap

### 🔹 CSS + Bootstrap
- Estilos personalizados
- Sombra, bordes, colores y hover
- Footer fijo en la parte inferior de la página

---

## 🖥️ Vista Previa del Proyecto

**Estructura general:**

- Un título centrado
- Un botón grande para generar el usuario
- Un cuadro tipo "card" donde se muestra el resultado
- Un footer morado fijo abajo

---

## 📁 Estructura del Proyecto

E4M3/
│── index.html
│── README.md
│── /assets
│ ├── css/style.css
│ └── js/index.js

yaml
Copiar código

---

## 🏁 Cómo Ejecutarlo

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Haz clic en **"Generar Nombre de Usuario"**.
4. Ingresa tu nombre y apellido.
5. ¡Listo! Tu usuario aparecerá en pantalla y en un alert.

---

## 👨‍💻 Desarrollado por  
**Pablo Olivares Figueroa**  
Módulo 3 — Curso Full Stack JavaScript

se entregan Repocitorio y Page de GitHub:

https://github.com/POLIVAF/E4M3.git

https://polivaf.github.io/E4M3/