import SectionHeader from '../components/SectionHeader.jsx';

export default function InventoryPage({ products }) {
  const lowStockProducts = products.filter((product) => Number(product.stock) <= 10);

  return (
    <section>
      <SectionHeader
        title="Inventario"
        description="Vista frontend de apoyo para control basico de existencias."
      />

      <section className="panel">
        <h3>Productos con inventario bajo</h3>
        {lowStockProducts.length === 0 ? (
          <p className="empty-message">No hay productos con inventario bajo.</p>
        ) : (
          <div className="cards-list">
            {lowStockProducts.map((product) => (
              <article className="list-card" key={product.id}>
                <h3>{product.name}</h3>
                <p>Categoria: {product.category}</p>
                <span>Stock: {product.stock}</span>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
