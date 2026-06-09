import SectionHeader from '../components/SectionHeader.jsx';
import { samplePayments } from '../data/initialData.js';

export default function PaymentsPage() {
  return (
    <section>
      <SectionHeader
        title="Pagos"
        description="Vista frontend para registrar y consultar pagos basicos."
      />

      <div className="cards-list">
        {samplePayments.map((payment) => (
          <article className="list-card" key={payment.id}>
            <h3>{payment.method}</h3>
            <p>Valor: ${payment.amount.toLocaleString('es-CO')}</p>
            <span>{payment.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
