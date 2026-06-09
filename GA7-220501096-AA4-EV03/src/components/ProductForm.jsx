import { useEffect, useState } from 'react';

const emptyProduct = {
  name: '',
  description: '',
  price: '',
  stock: '',
  category: '',
  available: true
};

export default function ProductForm({ selectedProduct, onSaveProduct, onCancelEdit }) {
  const [formData, setFormData] = useState(emptyProduct);

  useEffect(() => {
    if (selectedProduct) {
      setFormData(selectedProduct);
    } else {
      setFormData(emptyProduct);
    }
  }, [selectedProduct]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const productToSave = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock)
    };

    onSaveProduct(productToSave);
    setFormData(emptyProduct);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>{selectedProduct ? 'Editar producto' : 'Registrar producto'}</h3>

      <label>
        Nombre del producto
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ejemplo: Menu ejecutivo"
          required
        />
      </label>

      <label>
        Descripcion
        <input
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripcion corta del producto"
        />
      </label>

      <div className="form-grid">
        <label>
          Precio
          <input
            name="price"
            type="number"
            min="0"
            step="100"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Stock
          <input
            name="stock"
            type="number"
            min="0"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <label>
        Categoria
        <input
          name="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
          placeholder="Ejemplo: Lunch"
          required
        />
      </label>

      <label className="checkbox-label">
        <input
          name="available"
          type="checkbox"
          checked={Boolean(formData.available)}
          onChange={handleChange}
        />
        Producto disponible
      </label>

      <div className="form-actions">
        <button className="primary-button" type="submit">
          {selectedProduct ? 'Guardar cambios' : 'Registrar'}
        </button>
        {selectedProduct && (
          <button className="secondary-button" type="button" onClick={onCancelEdit}>
            Cancelar edicion
          </button>
        )}
      </div>
    </form>
  );
}
