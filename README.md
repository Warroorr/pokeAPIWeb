# PokeAPIWeb

Una aplicación web desarrollada con **Vue 3 + Nuxt 3**, que consume la [PokéAPI](https://pokeapi.co/) para mostrar una lista paginada de Pokémon. La aplicación está renderizada del lado del servidor (SSR) y cuenta con una interfaz simple y clara.


## 🚀 Características

- SSR habilitado con Nuxt 3.
- Consumo de datos desde la PokéAPI.
- Header con diseño vistoso usando TailwindCSS.
- Separación de lógica en servicios (`/services`).
- Código tipado con TypeScript.

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
- 🎨 [TailwindCSS](https://tailwindcss.com/)
- 📝 [TypeScript](https://www.typescriptlang.org/)
- 🐉 [PokéAPI](https://pokeapi.co/)

---

## 🧾 Inspiración de diseño

La maquetación general está inspirada en la estructura de artículos y listado de sport.es (https://www.sport.es/es/autor/david-bernabeu), adaptada con un diseño responsive y simplificado utilizando TailwindCSS.

---

## 📁 Estructura general del proyecto

```
/
├─ assets/
│ ├─ css/
│ │ ├─ tailwind.css
├─ components/
│ ├─ Header.vue
│ ├─ Footer.vue
│ ├─ Paginator.vue
│ └─ PokemonCard.vue
├─ layouts/
│ └─ default.vue
├─ models/
│ └─ Pokemon.ts
├─ pages/
│ └─ index.vue
├─ services/
│ ├─ fetchPokemonList.ts
│ └─ fetchPokemonDetails.ts
├─ app.vue
├─ nuxt.config.ts
└─ README.md
```
---

## 🧑‍💻 Autor

Alejandro Campillo Martínez
https://github.com/Warroorr