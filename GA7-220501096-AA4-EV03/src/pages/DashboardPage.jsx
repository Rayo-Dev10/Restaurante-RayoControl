import DashboardCard from '../components/DashboardCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

function formatCurrency(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value);
}

export default function DashboardPage({ totals, onNavigate }) {
  return (
    <section>
      <SectionHeader
        title="Panel principal"
        description="Resumen de los modulos principales del sistema Restaurante-RayoControl."
      />

      <div className="dashboard-grid">
        <DashboardCard
          title="Productos"
          value={totals.products}
          description="Productos registrados en el menu."
        />
        <DashboardCard
          title="Disponibles"
          value={totals.availableProducts}
          description="Productos activos para venta."
        />
        <DashboardCard
          title="Inventario"
          value={totals.totalStock}
          description="Unidades registradas en stock."
        />
        <DashboardCard
          title="Valor inventario"
          value={formatCurrency(totals.inventoryValue)}
          description="Valor aproximado segun precio y stock."
        />
      </div>

      <section className="feature-panel">
        <h3>Modulos del proyecto</h3>
        <p>
          El frontend se organiza segun los requisitos iniciales del proyecto: productos, pedidos,
          clientes, reservas, inventario, pagos y acceso de usuarios.
        </p>
        <button className="primary-button" type="button" onClick={() => onNavigate('products')}>
          Gestionar productos
        </button>
      </section>
    </section>
  );
}
