#  UP - UnsitosPost | Gaceta Universitaria

[![Tecnologías](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gabo-lo/Unsito-2.0.git)  

---

## Tabla de Contenidos

- [ Descripción del Proyecto](#-descripción-del-proyecto)
- [ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [ Tecnologías y Versiones](#️-tecnologías-y-versiones)
- [ Instalación y Ejecución](#-instalación-y-ejecución)
- [ Tabla de Funciones del Sistema](#-Tabla-de-funciones-del-sistema)
- [ Funcionalidades Principales](#-funcionalidades-principales)
- [ Credenciales de Administración](#-credenciales-de-administración)
- [ Video de Demostración](#-video-de-demostración)
- [ Estructura del Código](#-estructura-del-código)
- [ Responsividad](#-responsividad)
- [ Créditos](#-créditos)
- [ Estado del Proyecto](#-estado-del-proyecto)

---

## Descripción del Proyecto

**UnsitosPost** es la **Gaceta Universitaria** de la **Universidad de la Sierra Sur (UNSIS)**, un proyecto web desarrollado como parte de la materia **Tecnologías Web**. Su objetivo es centralizar y difundir información relevante para toda la comunidad universitaria, ofreciendo un espacio accesible y actualizado con:

| Sección | Contenido |
|:--------|:----------|
|  **Noticias** | Avisos importantes, convocatorias y eventos destacados |
|  **Deportes** | Torneos, convocatorias y resultados deportivos |
|  **Jornadas** | Actividades académicas por licenciatura |
|  **Servicios** | Atención médica, odontológica y nutricional |
|  **Concursos** | Culturales: altares, piñatas, calaveritas |
|  **Especiales** | Contenido destacado y secciones especiales |

El sistema incluye un **panel de administración** que permite gestionar el contenido de manera dinámica, almacenando los cambios en el navegador mediante `LocalStorage`.

---

##  Arquitectura del Proyecto

El proyecto sigue una arquitectura **Frontend-Only** con almacenamiento local, diseñada para ser ligera, eficiente y fácil de modificar. A continuación se muestra la estructura completa de archivos:
```bash
unsitospost/
│
├── index.html # Página principal
├── styles.css # Estilos globales (CSS3)
├── script.js # Lógica de administración (JavaScript)
├── README.md # Esta documentación
│
├── imagenes/ # Recursos gráficos
│ ├── logoUNSIS.png # Logo institucional
│ ├── portico.png # Imagen de portada
│ ├── basquet.png # Deportes
│ ├── conferencias.png # Eventos académicos
│ ├── basquet.jpg # Convocatoria deportiva
│ ├── Jornadas.png # Jornadas académicas
│ ├── calaveritas.jpg # Concursos
│ ├── ClinicaUniversitaria.jpg
│ ├── cina.jpg # Nutrición
│ ├── ClinicaOdontologica.png
│ └── ... (más recursos)
│
├── secciones/ # Páginas secundarias
│ ├── jornadas.html # Catálogo de jornadas
│ ├── concursos.html # Concursos culturales
│ └── previaDeportes.html # Deportes y convocatorias
│
└── formato/ # Componentes reutilizables
├── header.html # Encabezado
└── footer.html # Pie de página
```

### Frontend

- **HTML5 Semántico**: Uso de etiquetas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>` para una estructura clara y accesible.
- **CSS3 Avanzado**: Diseño responsivo con **Grid** y **Flexbox**, variables CSS para consistencia, y transiciones suaves.
- **JavaScript**: Lógica de navegación, panel de administración, carrusel, y funciones CRUD sin dependencias externas.
- **LocalStorage**: Persistencia de datos para el CMS ligero, permitiendo edición en tiempo real.

### Backend

*Este proyecto está diseñado como una aplicación Frontend-Only, utilizando exclusivamente el almacenamiento local del navegador (`LocalStorage`) para las funciones de administración. No requiere servidor backend ni base de datos.*

---

##  Tecnologías y Versiones

| Tecnología | Versión | Propósito |
|:-----------|:--------|:----------|
| **HTML5** | - | Estructura y contenido semántico |
| **CSS3** | - | Estilos, diseño responsivo y animaciones |
| **JavaScript (ES6+)** | ECMAScript 2020 | Interactividad y lógica de negocio |
| **LocalStorage** | Web Storage API | Persistencia de datos del CMS |
| **Git** | 2.25+ | Control de versiones |
| **GitHub** | - | Alojamiento del repositorio |

### Dependencias
- Ninguna dependencia externa. Proyecto 100% puro.

---

##  Instalación y Ejecución

###  Requisitos Previos

- Navegador web moderno (Chrome 90+, Firefox 88+, Edge 90+, Safari 14+)
- Git (para clonar el repositorio)
- (Opcional) Editor de código como VS Code
- (Opcional) Extensión "Live Server" para desarrollo local

###  Pasos para ejecutar el proyecto

#### 1. Clonar el repositorio

```bash
git clone https://github.com/gabo-lo/Unsito-2.0.git
cd Unsito-2.0 
```
#### 2. Abrir el proyecto

```bash
# Opción A
# Instalar la extensión "Live Server" en VS Code
# Click derecho en index.html → "Open with Live Server"

# Opción B
# Doble clic en index.html o abrir con el navegador

# Opción C
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

#### 3. Estructura de archivos
```bash
# Asegúrate de que la carpeta imagenes/ contenga los recursos gráficos necesarios.
```

##  Páginas principales

| Ruta | Descripción | 
|:-----------|:--------|
| **/index.html** | Página principal con carrusel, noticias, eventos y servicios | 
| **/secciones/jornadas.html** | Catálogo de jornadas académicas por licenciatura |
| **/secciones/concursos.html** | Concursos culturales (altares, piñatas, calaveritas) | 
| **/secciones/previaDeportes.html** | Convocatorias y torneos deportivos | 

## Tabla de Funciones del Sistema

| Función | Descripción | Método de Interacción |
|---------|-------------|----------------------|
| `login()` | Acceso al panel de administración | Prompt |
| `logout()` | Cierre de sesión | Botón |
| `cargarFormAdmin()` | Carga el formulario del módulo seleccionado | Selector |
| `agregarHero()` | Agregar nuevo slide al carrusel | Formulario |
| `editarHero(index)` | Editar slide existente | Prompt |
| `eliminarHero(index)` | Eliminar slide | Confirmación |
| `agregarNoticia()` | Agregar nueva noticia | Formulario |
| `editarNoticia(index)` | Editar noticia | Prompt |
| `eliminarNoticia(index)` | Eliminar noticia | Confirmación |
| `agregarEvento()` | Agregar nuevo evento | Formulario |
| `editarEvento(index)` | Editar evento | Prompt |
| `eliminarEvento(index)` | Eliminar evento | Confirmación |
| `agregarServicio()` | Agregar nuevo servicio | Formulario |
| `editarServicio(index)` | Editar servicio | Prompt |
| `eliminarServicio(index)` | Eliminar servicio | Confirmación |

## Funcionalidades Principales
1. Hero (Carrusel Dinámico)

El carrusel presenta imágenes destacadas con información relevante:

    3 slides preconfigurados con imágenes y textos

    Navegación mediante flechas (❮ / ❯) y puntos indicadores

    Rotación automática cada 6 segundos

    Transiciones suaves con CSS

   
```bash
 // Ejemplo de slide
{
    titulo: "Bienvenidos Universidad de la Sierra Sur",
    texto: "Información relevante y actual sobre la vida universitaria",
    imagen: "imagenes/portico.png",
    tag: "Destacado"
}
```
2.  Noticias Destacadas

Tarjetas informativas con:

    Imagen representativa

    Título y descripción breve

    Etiqueta de categoría (Deportes, Jornadas, Concursos)

    Botón "Ver más" que enlaza a la página de detalle

3.  Eventos

Línea de tiempo con:

    Fecha del evento

    Badge de categoría

    Título y descripción

4.  Servicios

Tarjetas informativas sobre servicios universitarios:

    Clínica Universitaria

    CINA - Nutrición

    Clínica Odontológica

5.  Secciones Secundarias

Páginas: 

    Jornadas: Ponencias y talleres por licenciatura

    Concursos: Altares, piñatas y calaveritas

    Deportes: Convocatorias y torneos

6.  Panel de Administración

Lo que puede hacer el administrador:

    Login seguro con credenciales

    CRUD completo para cada módulo

    Persistencia en LocalStorage

    Actualización en tiempo real del contenido


## Credenciales de Administración
| Campo | Valor |
|-------|-------|
| **Usuario** | `admin` |
| **Contraseña** | `admin123` |


## Video de demostración
Enlace directo al video: https://youtu.be/TU_VIDEO_ID

### Contenido del Video
| Tiempo | Sección | Contenido |
|--------|---------|-----------|
| **0:00 - 00:45** |  Introducción | Presentación del proyecto y objetivos |
| **00:45 - 2:30** |  Estructura del Código | Organización de archivos y carpetas |
| **02:30 - 5:55** |  Frontend - Navegación | Funcionalidades | Carrusel, noticias, eventos y servicios |
| **05:55 - 10:07** |  Panel de Administración | Login, CRUD y edición en tiempo real |
| **10:07 - 13:50** |  Código Destacado | Explicación de funciones clave |
| **13:50 - 16:00** |  Conclusión | Resumen y cierre |


## Estructura del código

#### CSS (styles.css)

/* ===== RESET Y BASE ===== */
/* Reset de estilos y configuración base */

/* ===== HEADER ===== */
/* Estilos del encabezado y navegación */

/* ===== MENÚ LATERAL ===== */
/* Menú hamburguesa para dispositivos móviles */

/* ===== CARRUSEL ===== */
/* Carrusel principal con controles */

/* ===== SECCIÓN ===== */
/* Estilos generales de secciones */

/* ===== GRID CATEGORÍAS ===== */
/* Tarjetas de categorías */

/* ===== TARJETAS DE NOTICIAS ===== */
/* Grid de tarjetas informativas */

/* ===== TIMELINE ===== */
/* Línea de tiempo para eventos */

/* ===== ADMIN ===== */
/* Panel de administración */

/* ===== RESPONSIVE ===== */
/* Media queries para dispositivos móviles */

#### JavaScript (script.js)

// ============================================================
//   MÓDULO 1: GESTIÓN DE DATOS (LocalStorage)
// ============================================================
//  - DATOS_POR_DEFECTO: Datos iniciales
//  - obtenerDatos(): Recuperar datos del LocalStorage
//  - guardarDatos(): Guardar datos en LocalStorage

// ============================================================
//   MÓDULO 2: RENDERIZADO DE COMPONENTES
// ============================================================
//  - actualizarHero(): Renderizar carrusel
//  - actualizarNoticias(): Renderizar noticias
//  - actualizarEventos(): Renderizar eventos
//  - actualizarServicios(): Renderizar servicios

// ============================================================
//   MÓDULO 3: PANEL DE ADMINISTRACIÓN (CRUD)
// ============================================================
//  - cargarFormAdmin(): Cargar formulario según módulo
//  - agregarHero/editarHero/eliminarHero(): CRUD Hero
//  - agregarNoticia/editarNoticia/eliminarNoticia(): CRUD Noticias
//  - agregarEvento/editarEvento/eliminarEvento(): CRUD Eventos
//  - agregarServicio/editarServicio/eliminarServicio(): CRUD Servicios

// ============================================================
//   MÓDULO 4: INTERFAZ Y NAVEGACIÓN
// ============================================================
//  - setupMenu(): Configurar menú hamburguesa
//  - moverHero(): Navegación del carrusel
//  - login() / logout(): Autenticación

// ============================================================
//   INICIALIZACIÓN
// ============================================================
//  - DOMContentLoaded: Inicializar aplicación


#### HTML (index.html)

```bash
<!-- ===== HEADER ===== -->
<!-- Encabezado con logo y acciones -->

<!-- ===== MENÚ LATERAL ===== -->
<!-- Navegación responsive -->

<!-- ===== CARRUSEL ===== -->
<!-- Carrusel principal -->

<!-- ===== ACERCA ===== -->
<!-- Descripción del proyecto -->

<!-- ===== SECCIONES ===== -->
<!-- Categorías de contenido -->

<!-- ===== NOTICIAS ===== -->
<!-- Contenido destacado -->

<!-- ===== EVENTOS ===== -->
<!-- Próximos eventos -->

<!-- ===== SERVICIOS ===== -->
<!-- Servicios universitarios -->

<!-- ===== ADMIN ===== -->
<!-- Panel de administración -->

<!-- ===== FOOTER ===== -->
<!-- Pie de página -->
```
## Responsividad

El sitio está optimizado para todos los dispositivos:

| Dispositivo | Breakpoint | Características |
|-------------|------------|-----------------|
|  **Desktop** | `> 768px` | Layout completo, 3 columnas en grid |
|  **Tablet** | `480px - 768px` | 2 columnas en grid, menú hamburguesa |
|  **Móvil** | `< 480px` | 1 columna, textos adaptados 

## Media Queries implementadas

```bash
/* Tablets y móviles grandes */
@media (max-width: 768px) {
    .menu-hamburguesa { display: block; }
    .hero-slide { height: 260px; }
    .grid-categorias { grid-template-columns: repeat(2, 1fr); }
}

/* Móviles pequeños */
@media (max-width: 480px) {
    .hero-slide { height: 200px; }
    .grid-noticias { grid-template-columns: 1fr; }
}
```

## Créditos

| Rol | Nombre |
|-----|--------|
| Desarrollador | [Gabriel López Ortiz] |
| Institución | Universidad de la Sierra Sur (UNSIS) |
| Materia | Tecnologías Web I |
| Ciclo Escolar | [2026 A] |
| Profesor | [Irving Ulises Hernández Miguel] |

# Si este proyecto te ha sido útil, considera darle una estrella en GitHub.