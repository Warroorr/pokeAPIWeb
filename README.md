# PokeAPIWeb

Una aplicación web desarrollada con **Vue 3 + Nuxt 3**, que consume la [PokéAPI](https://pokeapi.co/) para mostrar una lista paginada de Pokémon. La aplicación está renderizada del lado del servidor (SSR) y cuenta con una interfaz simple y clara.


## 🚀 Características

- SSR habilitado con Nuxt 3.
- Consumo de datos desde la PokéAPI.
- Separación de lógica en servicios (`/services`).
- Código tipado con TypeScript.
- Clases css propias (`/assets/css`).

---

## 🛠️ Instalación y ejecución local

1. **Clonar el repositorio**

```bash
git clone https://github.com/Warroorr/pokeAPIWeb.git
cd pokeAPIWeb
```

2. **Instalar dependencias**

```bash
npm install 
```

3. **Ejecutar el proyecto en modo desarrollo**

```bash
npm run dev 
```

4. **Abrir en el navegador**

Visita: http://localhost:3000

---

## 📦 Tecnologías usadas

- 🚀 [Vue 3](https://vuejs.org/)
- ⚡ [Nuxt 3](https://nuxt.com/)
- 📝 [TypeScript](https://www.typescriptlang.org/)
- 🐉 [PokéAPI](https://pokeapi.co/)

---

## 🧾 Inspiración de diseño

La maquetación general está inspirada en la estructura de artículos y listado de sport.es (https://www.sport.es/es/autor/david-bernabeu), adaptada con un diseño responsive y simplificado utilizando estilos CSS propios.

---

## 📁 Estructura general del proyecto

```
/
├─ assets/
│ ├─ css/
│ │ ├─ card.css
│ │ ├─ footer.css
│ │ ├─ header.css
│ │ ├─ layout.css
│ │ ├─ main.css
│ │ └─ paginator.css
├─ components/
│ ├─ Footer.vue
│ ├─ Header.vue
│ ├─ Paginator.vue
│ └─ PokemonCard.vue
├─ layouts/
│ └─ default.vue
├─ models/
│ └─ Pokemon.ts
├─ pages/
│ ├─ list/
│ │ └─ [page].vue
│ └─ index.vue
├─ services/
│ └─ pokemonService.ts
├─ app.vue
├─ nuxt.config.ts
└─ README.md
```
---

## 🧑‍💻 Autor

Alejandro Campillo Martínez
https://github.com/Warroorr