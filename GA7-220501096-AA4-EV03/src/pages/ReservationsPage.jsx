import SectionHeader from '../components/SectionHeader.jsx';
import { sampleReservations } from '../data/initialData.js';

export default function ReservationsPage() {
  return (
    <section>
      <SectionHeader
        title="Reservas"
        description="Vista frontend para revisar reservas de mesa."
      />

      <div className="cards-list">
        {sampleReservations.map((reservation) => (
          <article className="list-card" key={reservation.id}>
            <h3>{reservation.customer}</h3>
            <p>Fecha: {reservation.date}</p>
            <p>Hora: {reservation.hour}</p>
            <span>{reservation.guests} personas</span>
          </article>
        ))}
      </div>
    </section>
  );
}
