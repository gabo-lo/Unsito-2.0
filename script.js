// ============================================================
//  DATOS POR DEFECTO (para el panel de administración)
// ============================================================
const DATOS_POR_DEFECTO = {
    hero: [
        { titulo: "Bienvenidos Universidad de la Sierra Sur", texto: "Información relevante y actual sobre la vida universitaria", imagen: "imagenes/portico.png", tag: "Destacado" },
        { titulo: "Torneo de Baloncesto 2026", texto: "Inscripciones abiertas para el campeonato interuniversitario", imagen: "imagenes/basquet.png", tag: "Deportes" },
        { titulo: "Ciclo de Conferencias 2026", texto: "Ponencias de expertos en diversas áreas del conocimiento", imagen: "imagenes/conferencias.png", tag: "Académico" }
    ],
    noticias: [
        { titulo: "Torneo de Baloncesto 2026", texto: "Inscripciones abiertas para el campeonato interuniversitario. Participa con tu equipo.", etiqueta: "Deportes", imagen: "imagenes/basquet.jpg", enlace: "secciones/previaDeportes.html" },
        { titulo: "Jornadas Académicas 2026", texto: "Conferencias, talleres y ponencias con expertos. ¡No te lo pierdas!", etiqueta: "Jornadas", imagen: "imagenes/Jornadas.png", enlace: "secciones/jornadas.html" },
        { titulo: "Concurso de Calaveritas 2026", texto: "Participa con tu mejor calaverita literaria. Premios sorpresa.", etiqueta: "Concursos", imagen: "imagenes/calaveritas.jpg", enlace: "secciones/concursos.html" }
    ],
    eventos: [
        { fecha: "Próximamente", titulo: "Cartelera de Cine UNSIS", texto: "Disfruta de las mejores películas en el paraninfo universitario", badge: "Cine" },
        { fecha: "Inscripciones abiertas", titulo: "Concurso de Calaveritas 2026", texto: "Participa con tu mejor calaverita literaria y gana premios", badge: "Concurso" },
        { fecha: "Próximo torneo", titulo: "Torneo de Baloncesto Interuniversitario", texto: "Inscripciones abiertas para el campeonato de baloncesto 2026", badge: "Deportes" }
    ],
    servicios: [
        { titulo: "Clínica Universitaria", texto: "Servicios médicos integrales y consulta externa de alta calidad.", imagen: "imagenes/ClinicaUniversitaria.jpg" },
        { titulo: "CINA - Nutrición", texto: "Planes de alimentación personalizados, promoviendo hábitos saludables.", imagen: "imagenes/cina.jpg" },
        { titulo: "Clínica Odontológica", texto: "Tratamientos odontológicos especializados y preventivos.", imagen: "imagenes/ClinicaOdontologica.png" }
    ]
};
// ============================================================
//   CARGA DE COMPONENTES (Header y Footer)
// ============================================================

function cargarComponentes() {
    // Cargar Header
    fetch('formato/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el header');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // Reconfigurar eventos después de cargar el header
            configurarEventosHeader();
        })
        .catch(error => {
            console.error('Error cargando header:', error);
            // Fallback: mostrar header por defecto
            document.getElementById('header-container').innerHTML = `
                <header class="header">
                    <div class="header-left">
                        <button class="menu-hamburguesa" id="abrirMenu" aria-label="Menú">☰</button>
                        <a href="index.html" class="logo">
                            <img src="imagenes/logoUNSIS.png" alt="UP">
                            <div>UnsitosPost <span>Gaceta Universitaria</span></div>
                        </a>
                    </div>
                    <div class="header-actions">
                        <a href="#" class="boton-login" id="loginBtn">Iniciar Sesión</a>
                        <span class="user-badge" id="userBadge">👤 Admin</span>
                        <button id="logoutBtn" class="boton-login cerrar" style="display:none;">Cerrar</button>
                    </div>
                </header>
            `;
            configurarEventosHeader();
        });

    // Cargar Footer
    fetch('formato/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el footer');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error cargando footer:', error);
            // Fallback: mostrar footer por defecto
            document.getElementById('footer-container').innerHTML = `
                <footer class="footer">
                    <div class="footer-inner">
                        <div>
                            <h4>UP~UnsitosPost</h4>
                            <p>Gaceta Universitaria UNSIS</p>
                        </div>
                        <div>
                            <h4>Contacto</h4>
                            <p>Universidad de la Sierra Sur</p>
                            <ul>
                                <li>951 572 4100 ext. 1204</li>
                                <li>informacion.escolares.unsis@gmail.com</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Enlaces</h4>
                            <p><a href="index.html">Inicio</a></p>
                            <p><a href="#" id="loginFooter">Iniciar Sesión</a></p>
                        </div>
                    </div>
                    <div class="footer-bottom">© 2026 UP~UnsitosPost. Todos los derechos reservados.</div>
                </footer>
            `;
        });
}

function configurarEventosHeader() {
    // Configurar menú hamburguesa
    const abrirBtn = document.getElementById('abrirMenu');
    const cerrarBtn = document.getElementById('cerrarMenu');
    const menuLateral = document.getElementById('menuLateral');
    const overlay = document.getElementById('overlayMenu');

    function abrirMenu() {
        if (menuLateral) menuLateral.classList.add('abierto');
        if (overlay) overlay.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }

    function cerrarMenu() {
        if (menuLateral) menuLateral.classList.remove('abierto');
        if (overlay) overlay.classList.remove('activo');
        document.body.style.overflow = '';
    }

    if (abrirBtn) abrirBtn.addEventListener('click', abrirMenu);
    if (cerrarBtn) cerrarBtn.addEventListener('click', cerrarMenu);
    if (overlay) overlay.addEventListener('click', cerrarMenu);

    // Cerrar al hacer clic en un enlace del menú
    const enlaces = menuLateral?.querySelectorAll('a');
    enlaces?.forEach(enlace => {
        enlace.addEventListener('click', cerrarMenu);
    });

    // Login/Logout
    const loginBtn = document.getElementById('loginBtn');
    const loginFooter = document.getElementById('loginFooter');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            login();
        });
    }

    if (loginFooter) {
        loginFooter.addEventListener('click', (e) => {
            e.preventDefault();
            login();
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }

    // Admin link
    const adminLink = document.getElementById('adminLink');
    if (adminLink) {
        adminLink.addEventListener('click', (e) => {
            e.preventDefault();
            const adminPanel = document.getElementById('adminPanel');
            if (adminPanel) {
                adminPanel.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Actualizar estado de login
    const logged = localStorage.getItem('logeado') === 'true';
    const userBadge = document.getElementById('userBadge');
    
    if (logged) {
        if (adminLink) adminLink.style.display = 'block';
        if (loginBtn) loginBtn.style.display = 'none';
        if (userBadge) {
            userBadge.style.display = 'inline';
            userBadge.textContent = ' Admin';
        }
        if (logoutBtn) logoutBtn.style.display = 'inline';
    } else {
        if (adminLink) adminLink.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'inline';
        if (userBadge) userBadge.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

// ============================================================
//  GUARDAR Y OBTENER DATOS
// ============================================================
function obtenerDatos() {
    try {
        const raw = localStorage.getItem('cmsData');
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return JSON.parse(JSON.stringify(DATOS_POR_DEFECTO));
}

function guardarDatos(datos) {
    localStorage.setItem('cmsData', JSON.stringify(datos));
}

// ============================================================
//  ACTUALIZAR HTML DESDE LOS DATOS (para admin)
// ============================================================
function actualizarHero(datos) {
    const slides = datos.hero || [];
    const contenedor = document.getElementById('heroSlides');
    const dots = document.getElementById('heroDots');
    if (!contenedor) return;

    contenedor.innerHTML = slides.map((s, i) => `
        <div class="hero-slide" data-index="${i}">
            <img src="${s.imagen || ''}" alt="${s.titulo || ''}">
            <div class="hero-overlay">
                <span class="tag">${s.tag || 'Destacado'}</span>
                <h2>${s.titulo || ''}</h2>
                <p>${s.texto || ''}</p>
            </div>
        </div>
    `).join('');

    dots.innerHTML = slides.map((_, i) => `
        <span class="hero-dot ${i === 0 ? 'activo' : ''}" data-index="${i}"></span>
    `).join('');

    window.heroIndex = 0;
    window.heroTotal = slides.length;
    actualizarHeroDots();
}

function actualizarNoticias(datos) {
    const noticias = datos.noticias || [];
    const cont = document.getElementById('gridNoticias');
    if (!cont) return;
    cont.innerHTML = noticias.map(n => `
        <div class="noticia-card">
            <img src="${n.imagen || ''}" alt="${n.titulo || ''}">
            <div class="cuerpo">
                <span class="etiqueta">${n.etiqueta || 'General'}</span>
                <h3>${n.titulo || ''}</h3>
                <p>${n.texto || ''}</p>
                <a href="${n.enlace || '#'}" class="boton-leer">Ver más →</a>
            </div>
        </div>
    `).join('');
}

function actualizarEventos(datos) {
    const eventos = datos.eventos || [];
    const cont = document.getElementById('timelineEventos');
    if (!cont) return;
    cont.innerHTML = eventos.map(e => `
        <div class="timeline-item">
            <div class="fecha">${e.fecha || ''}</div>
            <div class="contenido">
                <span class="badge">${e.badge || 'Evento'}</span>
                <h4>${e.titulo || ''}</h4>
                <p>${e.texto || ''}</p>
            </div>
        </div>
    `).join('');
}

function actualizarServicios(datos) {
    const servicios = datos.servicios || [];
    const cont = document.getElementById('gridServicios');
    if (!cont) return;
    cont.innerHTML = servicios.map(s => `
        <div class="noticia-card">
            <img src="${s.imagen || ''}" alt="${s.titulo || ''}">
            <div class="cuerpo">
                <h3>${s.titulo || ''}</h3>
                <p>${s.texto || ''}</p>
            </div>
        </div>
    `).join('');
}

function actualizarHeroDots() {
    const dots = document.querySelectorAll('.hero-dot');
    dots.forEach((d, i) => {
        d.classList.toggle('activo', i === window.heroIndex);
    });
}

function moverHero(dir) {
    const total = window.heroTotal || 0;
    if (total === 0) return;
    window.heroIndex = (window.heroIndex + dir + total) % total;
    const wrapper = document.querySelector('.hero-slides');
    if (wrapper) wrapper.style.transform = `translateX(-${window.heroIndex * 100}%)`;
    actualizarHeroDots();
}

// ============================================================
//  CARGAR FORMULARIO ADMIN
// ============================================================
function cargarFormAdmin() {
    const select = document.getElementById('moduloSelect');
    const form = document.getElementById('formAdmin');
    if (!select || !form) return;
    const modulo = select.value;
    const datos = obtenerDatos();
    let html = '';

    if (modulo === 'hero') {
        const items = datos.hero || [];
        html = items.map((item, i) => `
            <div class="item-lista">
                <div>
                    <strong>${item.titulo || 'Sin título'}</strong>
                    <p style="font-size:13px;color:#666;">${item.texto || ''}</p>
                    ${item.imagen ? `<img src="${item.imagen}" class="preview-img">` : ''}
                </div>
                <div class="acciones">
                    <button onclick="editarHero(${i})">✏️</button>
                    <button onclick="eliminarHero(${i})">🗑️</button>
                </div>
            </div>
        `).join('');
        html += `
            <h4>Agregar slide</h4>
            <label>Título</label>
            <input id="heroTitulo" placeholder="Título">
            <label>Texto</label>
            <input id="heroTexto" placeholder="Descripción">
            <label>Etiqueta</label>
            <input id="heroTag" placeholder="Destacado">
            <label>URL imagen</label>
            <input id="heroImagen" placeholder="imagenes/ejemplo.jpg">
            <button class="boton" onclick="agregarHero()">Agregar</button>
        `;
    } else if (modulo === 'noticias') {
        const items = datos.noticias || [];
        html = items.map((item, i) => `
            <div class="item-lista">
                <div>
                    <strong>${item.titulo || 'Sin título'}</strong>
                    <p style="font-size:13px;color:#666;">${item.texto || ''}</p>
                    <span style="font-size:12px;background:#eee;padding:0 10px;border-radius:30px;">${item.etiqueta || ''}</span>
                </div>
                <div class="acciones">
                    <button onclick="editarNoticia(${i})">✏️</button>
                    <button onclick="eliminarNoticia(${i})">🗑️</button>
                </div>
            </div>
        `).join('');
        html += `
            <h4>Agregar Noticia</h4>
            <label>Título</label>
            <input id="nuevaNoticiaTitulo" placeholder="Título">
            <label>Texto</label>
            <textarea id="nuevaNoticiaTexto" placeholder="Descripción"></textarea>
            <label>Etiqueta</label>
            <input id="nuevaNoticiaEtiqueta" placeholder="Deportes, Jornadas, etc">
            <label>URL imagen</label>
            <input id="nuevaNoticiaImagen" placeholder="imagenes/ejemplo.jpg">
            <label>URL enlace</label>
            <input id="nuevaNoticiaEnlace" placeholder="secciones/ejemplo.html">
            <button class="boton" onclick="agregarNoticia()">Agregar</button>
        `;
    } else if (modulo === 'eventos') {
        const items = datos.eventos || [];
        html = items.map((item, i) => `
            <div class="item-lista">
                <div>
                    <strong>${item.titulo || 'Sin título'}</strong>
                    <p style="font-size:13px;color:#666;">${item.texto || ''}</p>
                    <span style="font-size:12px;background:#eee;padding:0 10px;border-radius:30px;">${item.badge || ''}</span>
                </div>
                <div class="acciones">
                    <button onclick="editarEvento(${i})">✏️</button>
                    <button onclick="eliminarEvento(${i})">🗑️</button>
                </div>
            </div>
        `).join('');
        html += `
            <h4>Agregar Evento</h4>
            <label>Fecha</label>
            <input id="nuevoEventoFecha" placeholder="Ej: 15 de abril">
            <label>Título</label>
            <input id="nuevoEventoTitulo" placeholder="Nombre del evento">
            <label>Descripción</label>
            <textarea id="nuevoEventoTexto" placeholder="Descripción"></textarea>
            <label>Badge</label>
            <input id="nuevoEventoBadge" placeholder="Deportes, Concurso, etc">
            <button class="boton" onclick="agregarEvento()">Agregar</button>
        `;
    } else if (modulo === 'servicios') {
        const items = datos.servicios || [];
        html = items.map((item, i) => `
            <div class="item-lista">
                <div>
                    <strong>${item.titulo || 'Sin título'}</strong>
                    <p style="font-size:13px;color:#666;">${item.texto || ''}</p>
                    ${item.imagen ? `<img src="${item.imagen}" class="preview-img">` : ''}
                </div>
                <div class="acciones">
                    <button onclick="editarServicio(${i})">✏️</button>
                    <button onclick="eliminarServicio(${i})">🗑️</button>
                </div>
            </div>
        `).join('');
        html += `
            <h4>Agregar Servicio</h4>
            <label>Título</label>
            <input id="nuevoServicioTitulo" placeholder="Nombre del servicio">
            <label>Descripción</label>
            <textarea id="nuevoServicioTexto" placeholder="Descripción"></textarea>
            <label>URL imagen</label>
            <input id="nuevoServicioImagen" placeholder="imagenes/ejemplo.jpg">
            <button class="boton" onclick="agregarServicio()">Agregar</button>
        `;
    }

    form.innerHTML = html;
}

// ============================================================
//  CRUD - HERO
// ============================================================
function agregarHero() {
    const datos = obtenerDatos();
    const titulo = document.getElementById('heroTitulo').value.trim();
    const texto = document.getElementById('heroTexto').value.trim();
    const tag = document.getElementById('heroTag').value.trim() || 'Destacado';
    const imagen = document.getElementById('heroImagen').value.trim() || 'imagenes/portico.png';
    if (!titulo || !texto) { alert('Completa título y texto'); return; }
    datos.hero.push({ titulo, texto, tag, imagen });
    guardarDatos(datos);
    actualizarHero(datos);
    cargarFormAdmin();
    mostrarMensaje('Slide agregado');
}

function eliminarHero(index) {
    if (!confirm('¿Eliminar este slide?')) return;
    const datos = obtenerDatos();
    datos.hero.splice(index, 1);
    guardarDatos(datos);
    actualizarHero(datos);
    cargarFormAdmin();
}

function editarHero(index) {
    const datos = obtenerDatos();
    const item = datos.hero[index];
    const nuevoTitulo = prompt('Título:', item.titulo);
    if (nuevoTitulo === null) return;
    const nuevoTexto = prompt('Texto:', item.texto);
    if (nuevoTexto === null) return;
    const nuevaTag = prompt('Etiqueta:', item.tag || 'Destacado');
    if (nuevaTag === null) return;
    const nuevaImagen = prompt('URL imagen:', item.imagen);
    if (nuevaImagen === null) return;
    datos.hero[index] = { ...item, titulo: nuevoTitulo, texto: nuevoTexto, tag: nuevaTag, imagen: nuevaImagen };
    guardarDatos(datos);
    actualizarHero(datos);
    cargarFormAdmin();
}

// ============================================================
//  CRUD - NOTICIAS
// ============================================================
function agregarNoticia() {
    const datos = obtenerDatos();
    const titulo = document.getElementById('nuevaNoticiaTitulo').value.trim();
    const texto = document.getElementById('nuevaNoticiaTexto').value.trim();
    const etiqueta = document.getElementById('nuevaNoticiaEtiqueta').value.trim() || 'General';
    const imagen = document.getElementById('nuevaNoticiaImagen').value.trim() || 'imagenes/noticia.jpg';
    const enlace = document.getElementById('nuevaNoticiaEnlace').value.trim() || '#';
    if (!titulo || !texto) { alert('Completa título y descripción'); return; }
    datos.noticias.push({ titulo, texto, etiqueta, imagen, enlace });
    guardarDatos(datos);
    actualizarNoticias(datos);
    cargarFormAdmin();
    mostrarMensaje('Noticia agregada');
    document.querySelectorAll('#nuevaNoticiaTitulo, #nuevaNoticiaTexto, #nuevaNoticiaEtiqueta, #nuevaNoticiaImagen, #nuevaNoticiaEnlace').forEach(el => el.value = '');
}

function eliminarNoticia(index) {
    if (!confirm('¿Eliminar esta noticia?')) return;
    const datos = obtenerDatos();
    datos.noticias.splice(index, 1);
    guardarDatos(datos);
    actualizarNoticias(datos);
    cargarFormAdmin();
}

function editarNoticia(index) {
    const datos = obtenerDatos();
    const item = datos.noticias[index];
    const nuevoTitulo = prompt('Título:', item.titulo);
    if (nuevoTitulo === null) return;
    const nuevoTexto = prompt('Descripción:', item.texto);
    if (nuevoTexto === null) return;
    const nuevaEtiqueta = prompt('Etiqueta:', item.etiqueta);
    if (nuevaEtiqueta === null) return;
    const nuevaImagen = prompt('URL imagen:', item.imagen);
    if (nuevaImagen === null) return;
    const nuevoEnlace = prompt('URL enlace:', item.enlace || '#');
    if (nuevoEnlace === null) return;
    datos.noticias[index] = { ...item, titulo: nuevoTitulo, texto: nuevoTexto, etiqueta: nuevaEtiqueta, imagen: nuevaImagen, enlace: nuevoEnlace };
    guardarDatos(datos);
    actualizarNoticias(datos);
    cargarFormAdmin();
}

// ============================================================
//  CRUD - EVENTOS
// ============================================================
function agregarEvento() {
    const datos = obtenerDatos();
    const fecha = document.getElementById('nuevoEventoFecha').value.trim();
    const titulo = document.getElementById('nuevoEventoTitulo').value.trim();
    const texto = document.getElementById('nuevoEventoTexto').value.trim();
    const badge = document.getElementById('nuevoEventoBadge').value.trim() || 'Evento';
    if (!fecha || !titulo || !texto) { alert('Completa todos los campos'); return; }
    datos.eventos.push({ fecha, titulo, texto, badge });
    guardarDatos(datos);
    actualizarEventos(datos);
    cargarFormAdmin();
    mostrarMensaje('Evento agregado');
    document.querySelectorAll('#nuevoEventoFecha, #nuevoEventoTitulo, #nuevoEventoTexto, #nuevoEventoBadge').forEach(el => el.value = '');
}

function eliminarEvento(index) {
    if (!confirm('¿Eliminar este evento?')) return;
    const datos = obtenerDatos();
    datos.eventos.splice(index, 1);
    guardarDatos(datos);
    actualizarEventos(datos);
    cargarFormAdmin();
}

function editarEvento(index) {
    const datos = obtenerDatos();
    const item = datos.eventos[index];
    const nuevaFecha = prompt('Fecha:', item.fecha);
    if (nuevaFecha === null) return;
    const nuevoTitulo = prompt('Título:', item.titulo);
    if (nuevoTitulo === null) return;
    const nuevoTexto = prompt('Descripción:', item.texto);
    if (nuevoTexto === null) return;
    const nuevoBadge = prompt('Badge:', item.badge || 'Evento');
    if (nuevoBadge === null) return;
    datos.eventos[index] = { ...item, fecha: nuevaFecha, titulo: nuevoTitulo, texto: nuevoTexto, badge: nuevoBadge };
    guardarDatos(datos);
    actualizarEventos(datos);
    cargarFormAdmin();
}

// ============================================================
//  CRUD - SERVICIOS
// ============================================================
function agregarServicio() {
    const datos = obtenerDatos();
    const titulo = document.getElementById('nuevoServicioTitulo').value.trim();
    const texto = document.getElementById('nuevoServicioTexto').value.trim();
    const imagen = document.getElementById('nuevoServicioImagen').value.trim() || 'imagenes/servicio.jpg';
    if (!titulo || !texto) { alert('Completa todos los campos'); return; }
    datos.servicios.push({ titulo, texto, imagen });
    guardarDatos(datos);
    actualizarServicios(datos);
    cargarFormAdmin();
    mostrarMensaje('Servicio agregado');
    document.querySelectorAll('#nuevoServicioTitulo, #nuevoServicioTexto, #nuevoServicioImagen').forEach(el => el.value = '');
}

function eliminarServicio(index) {
    if (!confirm('¿Eliminar este servicio?')) return;
    const datos = obtenerDatos();
    datos.servicios.splice(index, 1);
    guardarDatos(datos);
    actualizarServicios(datos);
    cargarFormAdmin();
}

function editarServicio(index) {
    const datos = obtenerDatos();
    const item = datos.servicios[index];
    const nuevoTitulo = prompt('Título:', item.titulo);
    if (nuevoTitulo === null) return;
    const nuevoTexto = prompt('Descripción:', item.texto);
    if (nuevoTexto === null) return;
    const nuevaImagen = prompt('URL imagen:', item.imagen);
    if (nuevaImagen === null) return;
    datos.servicios[index] = { ...item, titulo: nuevoTitulo, texto: nuevoTexto, imagen: nuevaImagen };
    guardarDatos(datos);
    actualizarServicios(datos);
    cargarFormAdmin();
}

// ============================================================
//  MENSAJES
// ============================================================
function mostrarMensaje(msg) {
    const el = document.getElementById('adminMensaje');
    if (!el) return;
    el.innerHTML = `<div class="mensaje-exito"> ${msg}</div>`;
    setTimeout(() => { el.innerHTML = ''; }, 3000);
}

// ============================================================
//  LOGIN / LOGOUT
// ============================================================
function login() {
    const user = prompt('Usuario:');
    if (user === null) return;
    const pass = prompt('Contraseña:');
    if (pass === null) return;
    if (user === 'admin' && pass === 'admin123') {
        localStorage.setItem('logeado', 'true');
        mostrarAdmin(true);
        alert(' Sesión iniciada');
    } else {
        alert(' Usuario o contraseña incorrectos');
    }
}

function logout() {
    localStorage.removeItem('logeado');
    mostrarAdmin(false);
    alert('Sesión cerrada');
}

function mostrarAdmin(logged) {
    const adminPanel = document.getElementById('adminPanel');
    const adminLink = document.getElementById('adminLink');
    const loginBtn = document.getElementById('loginBtn');
    const userBadge = document.getElementById('userBadge');
    const logoutBtn = document.getElementById('logoutBtn');

    if (logged) {
        if (adminPanel) adminPanel.classList.remove('oculto');
        if (adminLink) adminLink.style.display = 'block';
        if (loginBtn) loginBtn.style.display = 'none';
        if (userBadge) { userBadge.style.display = 'inline'; userBadge.textContent = '👤 Admin'; }
        if (logoutBtn) logoutBtn.style.display = 'inline';
        cargarFormAdmin();
    } else {
        if (adminPanel) adminPanel.classList.add('oculto');
        if (adminLink) adminLink.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'inline';
        if (userBadge) userBadge.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

// ============================================================
//  CONFIGURAR MENÚ HAMBURGUESA
// ============================================================
function setupMenu() {
    const abrirBtn = document.getElementById('abrirMenu');
    const cerrarBtn = document.getElementById('cerrarMenu');
    const menuLateral = document.getElementById('menuLateral');
    const overlay = document.getElementById('overlayMenu');

    function abrirMenu() {
        menuLateral.classList.add('abierto');
        overlay.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }

    function cerrarMenu() {
        menuLateral.classList.remove('abierto');
        overlay.classList.remove('activo');
        document.body.style.overflow = '';
    }

    if (abrirBtn) abrirBtn.addEventListener('click', abrirMenu);
    if (cerrarBtn) cerrarBtn.addEventListener('click', cerrarMenu);
    if (overlay) overlay.addEventListener('click', cerrarMenu);

    const enlaces = menuLateral?.querySelectorAll('a');
    enlaces?.forEach(enlace => {
        enlace.addEventListener('click', cerrarMenu);
    });
}

// ============================================================
//   INICIALIZACIÓN
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar header y footer
    cargarComponentes();
    
    // 2. Cargar datos y renderizar contenido
    const datos = obtenerDatos();
    actualizarHero(datos);
    actualizarNoticias(datos);
    actualizarEventos(datos);
    actualizarServicios(datos);
    
    // 3. Hero controles
    document.getElementById('heroPrev')?.addEventListener('click', () => moverHero(-1));
    document.getElementById('heroNext')?.addEventListener('click', () => moverHero(1));
    
    // 4. Dots del hero
    document.getElementById('heroDots')?.addEventListener('click', (e) => {
        const dot = e.target.closest('.hero-dot');
        if (dot) {
            const idx = parseInt(dot.dataset.index);
            if (!isNaN(idx)) {
                window.heroIndex = idx;
                const wrapper = document.querySelector('.hero-slides');
                if (wrapper) wrapper.style.transform = `translateX(-${idx * 100}%)`;
                actualizarHeroDots();
            }
        }
    });
    
    // 5. Selector de módulo del admin
    document.getElementById('moduloSelect')?.addEventListener('change', cargarFormAdmin);
    
    // 6. Auto-rotación hero
    setInterval(() => moverHero(1), 6000);
    
    // 7. Escuchar cambios en localStorage
    window.addEventListener('storage', () => {
        const datos = obtenerDatos();
        actualizarHero(datos);
        actualizarNoticias(datos);
        actualizarEventos(datos);
        actualizarServicios(datos);
    });
    
    // 8. Verificar estado de login
    const logged = localStorage.getItem('logeado') === 'true';
    if (logged) {
        cargarFormAdmin();
    }
});

// ============================================================
//  FUNCIONES GLOBALES PARA ONCLICK
// ============================================================
window.agregarHero = agregarHero;
window.eliminarHero = eliminarHero;
window.editarHero = editarHero;
window.agregarNoticia = agregarNoticia;
window.eliminarNoticia = eliminarNoticia;
window.editarNoticia = editarNoticia;
window.agregarEvento = agregarEvento;
window.eliminarEvento = eliminarEvento;
window.editarEvento = editarEvento;
window.agregarServicio = agregarServicio;
window.eliminarServicio = eliminarServicio;
window.editarServicio = editarServicio;
window.cargarFormAdmin = cargarFormAdmin;
window.moverHero = moverHero;
window.login = login;
window.logout = logout;