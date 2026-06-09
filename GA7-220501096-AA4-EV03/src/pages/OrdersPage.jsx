import SectionHeader from '../components/SectionHeader.jsx';
import { sampleOrders } from '../data/initialData.js';

export default function OrdersPage() {
  return (
    <section>
      <SectionHeader
        title="Pedidos"
        description="Vista frontend para el seguimiento basico de pedidos en mesa y domicilios."
      />

      <div className="cards-list">
        {sampleOrders.map((order) => (
          <article className="list-card" key={order.id}>
            <h3>Pedido #{order.id}</h3>
            <p>{order.customer}</p>
            <span>{order.status}</span>
            <strong>${order.total.toLocaleString('es-CO')}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
