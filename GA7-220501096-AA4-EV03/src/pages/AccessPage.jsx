import { useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';

export default function AccessPage() {
  const [message, setMessage] = useState('La integracion real con servicios web se realizara en la evidencia GA7-AA5-EV01.');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage('Formulario validado visualmente. Pendiente conexion con servicios web de registro e inicio de sesion.');
  }

  return (
    <section>
      <SectionHeader
        title="Acceso de usuarios"
        description="Interfaz visual preparada para registro e inicio de sesion sin consumo de API."
      />

      <div className="access-grid">
        <form className="panel access-form" onSubmit={handleSubmit}>
          <h3>Registro</h3>
          <label>
            Usuario
            <input type="text" placeholder="usuario" required />
          </label>
          <label>
            Contrasena
            <input type="password" placeholder="contrasena" required />
          </label>
          <button className="primary-button" type="submit">Validar registro</button>
        </form>

        <form className="panel access-form" onSubmit={handleSubmit}>
          <h3>Inicio de sesion</h3>
          <label>
            Usuario
            <input type="text" placeholder="usuario" required />
          </label>
          <label>
            Contrasena
            <input type="password" placeholder="contrasena" required />
          </label>
          <button className="primary-button" type="submit">Validar ingreso</button>
        </form>
      </div>

      <p className="info-message">{message}</p>
    </section>
  );
}
