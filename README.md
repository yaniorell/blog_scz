# 🌴 ALMA CAMBA: Tu Guía Definitiva de Santa Cruz
### Blog Turístico Interactivo del Oriente Boliviano

**ALMA CAMBA** es una plataforma web interactiva y responsiva diseñada para sumergir al usuario en la riqueza geográfica, cultural, gastronómica y tradicional del departamento de Santa Cruz, Bolivia. El diseño cuenta con una atmósfera tropical, cálida y vibrante que rinde homenaje a la identidad del oriente boliviano.

---

## 📸 Capturas del Diseño y Concepto Visual

El proyecto implementa un sistema visual premium de **Tierra y Verde**:
*   **Verde Selva y Tajibo:** Evoca la flora tropical del departamento (las lomas de arena, el Amboró, las palmeras).
*   **Marrón Adobe y Jalea:** Inspirado en la arquitectura jesuítica chiquitana y las tinajas de barro de Cotoca.
*   **Acentos de Sol:** Toques dorados y anaranjados para botones interactivos y estados activos.

---

## ✨ Características Principales

1.  **🗺️ Mapa Turístico Interactivo (Leaflet.js):**
    *   Integra un mapa completamente funcional con **24 lugares turísticos clave** clasificados en 4 rutas emblemáticas (*Urbanas, Valles y Norte, Balnearios, Chiquitania*).
    *   Aplica un filtro estético sepia en CSS para darle un aspecto de "papiro o madera tallada viejo pero moderno".
    *   Efecto de zoom suave (`flyTo`) al seleccionar destinos e información dinámica en barra lateral (detalles, coordenadas y guía de "cómo llegar").

2.  **🥩 Gastronomía Cruceña Interactiva & Recomendador Inteligente:**
    *   Tarjetas detalladas de platos típicos (Majadito, Keperí, Locro), masitas (Cuñapé, Zonzo, Pan de Arroz) y bebidas tradicionales (Chicha, Somó).
    *   **Quiz Recomendador:** Un widget dinámico en JavaScript que te sugiere la delicia cruceña ideal según tu antojo (dulce, masita, almuerzo contundente o refrescante).
    *   Ingredientes representados con iconos y explicaciones emergentes (*tooltips*).

3.  **🏛️ Enciclopedia de las 15 Provincias:**
    *   Una grilla interactiva responsiva que presenta las 15 provincias cruceñas con sus capitales.
    *   Al hacer clic, despliega un modal informativo limpio que incluye una reseña histórica, cultural y una galería de imágenes alineada al diseño.

4.  **🗣️ Diccionario de Jergas Cruceñas (Flashcards 3D):**
    *   Tarjetas didácticas con efecto de volteo tridimensional (3D Flip) en CSS para aprender expresiones locales como *"Pariente"*, *"Buri"*, *"¡Jopo de toro!"*, *"¡Aneró!"*, etc.

5.  **📖 Mitos y Leyendas (Acordeón Animado):**
    *   Un rincón de lectura interactivo con acordeones fluidos hechos en CSS Grid que revelan las historias tradicionales del *Duende*, el *Mojón con Cara* y la *Viudita*.

6.  **🔍 Buscador Global Integrado:**
    *   Filtra dinámicamente y en tiempo real los destinos y marcadores en el mapa a medida que escribes en la barra de búsqueda.

---

## 🛠️ Tecnologías Utilizadas

*   **HTML5 Semántico:** Estructura limpia y accesible de acuerdo con estándares modernos.
*   **CSS3 Moderno:** Maquetación con **CSS Grid** y **Flexbox** para total adaptabilidad móvil (Responsive Web Design). Transiciones suaves de estado (`all 0.3s ease-in-out`).
*   **JavaScript (ES6+):** Lógica dinámica, filtrado de datos e interactividad guiada por arrays estructurados de datos.
*   **Leaflet API:** Mapas interactivos optimizados.

---

## 🚀 Cómo Iniciar el Proyecto

Dado que es un desarrollo frontend estático puro, no requiere compilación ni dependencias complejas.

### 1. Clonar el repositorio
```bash
git clone https://github.com/yaniorell/blog_scz.git
cd blog_scz
```

### 2. Ejecutar Localmente
*   **Opción A (Simple):** Haz doble clic sobre el archivo `index.html` para abrirlo directamente en cualquier navegador web.
*   **Opción B (Servidor de Desarrollo con Live Reload):**
    Si tienes Node.js instalado, puedes iniciar un servidor local para realizar pruebas en tiempo real:
    ```bash
    npx browser-sync start --server --files "*.*"
    ```

---

## 📁 Estructura del Directorio

```text
blog_scz/
├── assets/
│   └── images/
│       ├── tajibo_amarillo.jpg       # Imagen de cabecera principal (Cathedral y Tajibo)
│       ├── tropical_foliage.jpg      # Textura de fondo de hojas tropicales
│       └── gastronomia_crucena.jpg   # Comidas y dulces típicos en mesa rústica
├── index.html                        # Estructura HTML y enlaces CDN
├── style.css                         # Hojas de estilo y diseño responsivo
├── script.js                         # Base de datos y lógica interactiva
└── README.md                         # Información del proyecto
```

---

## 🌟 Dedicatoria Cultural
> *"Es ley del cruceño la hospitalidad, y vivir en su suelo un canto a la libertad."*  
> Este proyecto ha sido desarrollado para rendir un sincero homenaje a la hermosa geografía y las cálidas tradiciones de Santa Cruz de la Sierra y sus provincias.
