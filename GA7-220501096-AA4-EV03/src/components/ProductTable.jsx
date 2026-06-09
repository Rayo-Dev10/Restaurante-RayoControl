function formatCurrency(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value);
}

export default function ProductTable({ products, onEditProduct, onDeleteProduct, onToggleAvailability }) {
  if (products.length === 0) {
    return <p className="empty-message">No hay productos registrados.</p>;
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Descripcion</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Disponible</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{formatCurrency(product.price)}</td>
              <td>{product.stock}</td>
              <td>
                <span className={product.available ? 'status available' : 'status unavailable'}>
                  {product.available ? 'Si' : 'No'}
                </span>
              </td>
              <td className="table-actions">
                <button type="button" onClick={() => onEditProduct(product)}>
                  Editar
                </button>
                <button type="button" onClick={() => onToggleAvailability(product.id)}>
                  Cambiar estado
                </button>
                <button className="danger-button" type="button" onClick={() => onDeleteProduct(product.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
