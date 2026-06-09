import SectionHeader from '../components/SectionHeader.jsx';
import { sampleCustomers } from '../data/initialData.js';

export default function CustomersPage() {
  return (
    <section>
      <SectionHeader
        title="Clientes"
        description="Vista frontend para la consulta general de clientes del restaurante."
      />

      <div className="cards-list">
        {sampleCustomers.map((customer) => (
          <article className="list-card" key={customer.id}>
            <h3>{customer.name}</h3>
            <p>Telefono: {customer.phone}</p>
            <span>{customer.type}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
