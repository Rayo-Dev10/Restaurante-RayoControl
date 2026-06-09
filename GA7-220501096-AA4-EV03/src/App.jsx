import { useEffect, useMemo, useState } from 'react';
import AppHeader from './components/AppHeader.jsx';
import AppNavigation from './components/AppNavigation.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import CustomersPage from './pages/CustomersPage.jsx';
import ReservationsPage from './pages/ReservationsPage.jsx';
import InventoryPage from './pages/InventoryPage.jsx';
import PaymentsPage from './pages/PaymentsPage.jsx';
import AccessPage from './pages/AccessPage.jsx';
import { initialProducts } from './data/initialData.js';

const STORAGE_KEY = 'rayocontrol_products_frontend_ev03';

function loadProducts() {
  const storedProducts = localStorage.getItem(STORAGE_KEY);
  if (!storedProducts) {
    return initialProducts;
  }

  try {
    const parsedProducts = JSON.parse(storedProducts);
    if (!Array.isArray(parsedProducts)) {
      localStorage.removeItem(STORAGE_KEY);
      return initialProducts;
    }
    return parsedProducts;
  } catch (error) {
    console.warn('No fue posible leer los productos almacenados localmente.', error);
    localStorage.removeItem(STORAGE_KEY);
    return initialProducts;
  }
}

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [products, setProducts] = useState(loadProducts);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const totals = useMemo(() => {
    const availableProducts = products.filter((product) => product.available).length;
    const totalStock = products.reduce((total, product) => total + Number(product.stock || 0), 0);
    const inventoryValue = products.reduce(
      (total, product) => total + Number(product.price || 0) * Number(product.stock || 0),
      0
    );

    return {
      products: products.length,
      availableProducts,
      totalStock,
      inventoryValue
    };
  }, [products]);

  function handleSaveProduct(productData) {
    if (productData.id) {
      setProducts((currentProducts) =>
        currentProducts.map((product) => (product.id === productData.id ? productData : product))
      );
      return;
    }

    const nextId = products.length === 0 ? 1 : Math.max(...products.map((product) => product.id)) + 1;
    setProducts((currentProducts) => [...currentProducts, { ...productData, id: nextId }]);
  }

  function handleDeleteProduct(productId) {
    setProducts((currentProducts) => currentProducts.filter((product) => product.id !== productId));
  }

  function handleToggleAvailability(productId) {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId ? { ...product, available: !product.available } : product
      )
    );
  }

  function renderPage() {
    if (activePage === 'products') {
      return (
        <ProductsPage
          products={products}
          onSaveProduct={handleSaveProduct}
          onDeleteProduct={handleDeleteProduct}
          onToggleAvailability={handleToggleAvailability}
        />
      );
    }

    if (activePage === 'orders') {
      return <OrdersPage />;
    }

    if (activePage === 'customers') {
      return <CustomersPage />;
    }

    if (activePage === 'reservations') {
      return <ReservationsPage />;
    }

    if (activePage === 'inventory') {
      return <InventoryPage products={products} />;
    }

    if (activePage === 'payments') {
      return <PaymentsPage />;
    }

    if (activePage === 'access') {
      return <AccessPage />;
    }

    return <DashboardPage totals={totals} onNavigate={setActivePage} />;
  }

  return (
    <div className="app-shell">
      <AppHeader />
      <div className="layout">
        <AppNavigation activePage={activePage} onNavigate={setActivePage} />
        <main className="main-content">{renderPage()}</main>
      </div>
    </div>
  );
}
