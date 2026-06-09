import { useMemo, useState } from 'react';
import ProductForm from '../components/ProductForm.jsx';
import ProductTable from '../components/ProductTable.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function ProductsPage({ products, onSaveProduct, onDeleteProduct, onToggleAvailability }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
  }, [products, searchTerm]);

  function handleSaveProduct(productData) {
    onSaveProduct(productData);
    setSelectedProduct(null);
  }

  return (
    <section>
      <SectionHeader
        title="Productos del menu"
        description="Modulo frontend para registrar, consultar, editar y eliminar productos."
      />

      <div className="content-grid">
        <ProductForm
          selectedProduct={selectedProduct}
          onSaveProduct={handleSaveProduct}
          onCancelEdit={() => setSelectedProduct(null)}
        />

        <section className="panel">
          <div className="panel-header">
            <h3>Listado de productos</h3>
            <label className="search-box">
              Buscar
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Buscar por nombre"
              />
            </label>
          </div>

          <ProductTable
            products={filteredProducts}
            onEditProduct={setSelectedProduct}
            onDeleteProduct={onDeleteProduct}
            onToggleAvailability={onToggleAvailability}
          />
        </section>
      </div>
    </section>
  );
}
