import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="app-shell">
    <section class="hero-card">
      <p class="eyebrow">SENA · Análisis y Desarrollo de Software</p>

      <h1>Restaurante-RayoControl</h1>

      <p class="subtitle">
        Primera aplicación Android de demostración académica
      </p>

      <div class="evidence-box">
        <span>Evidencia</span>
        <strong>GA8-220501096-AA2-EV01</strong>
        <small>Taller acerca de integración, tecnologías emergentes y disruptivas</small>
      </div>

      <p class="description">
        Esta aplicación presenta una pantalla inicial construida con Vite y preparada
        para ejecutarse como aplicación Android mediante Capacitor y Android Studio.
      </p>

      <div class="tech-grid">
        <article class="tech-card">
          <h2>Android</h2>
          <p>Sistema operativo móvil usado para ejecutar aplicaciones en celulares, tabletas y otros dispositivos inteligentes.</p>
        </article>

        <article class="tech-card">
          <h2>APK</h2>
          <p>Archivo de instalación que contiene los recursos, código y configuración necesarios para distribuir una app Android.</p>
        </article>

        <article class="tech-card">
          <h2>SDK</h2>
          <p>Conjunto de herramientas que permite compilar, probar y ejecutar aplicaciones para Android.</p>
        </article>
      </div>

      <section class="security-note">
        <h2>Principio de mínimo privilegio</h2>
        <p>
          La aplicación solo debe solicitar los permisos necesarios para cumplir su función,
          reduciendo riesgos de seguridad y protegiendo la información del usuario.
        </p>
      </section>

      <footer>
        <span>Aprendiz: Rayo Palatianos</span>
        <span>Ficha: 3134559</span>
      </footer>
    </section>
  </main>
`