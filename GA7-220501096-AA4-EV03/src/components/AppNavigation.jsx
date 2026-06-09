const navigationItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'products', label: 'Productos' },
  { id: 'orders', label: 'Pedidos' },
  { id: 'customers', label: 'Clientes' },
  { id: 'reservations', label: 'Reservas' },
  { id: 'inventory', label: 'Inventario' },
  { id: 'payments', label: 'Pagos' },
  { id: 'access', label: 'Acceso' }
];

export default function AppNavigation({ activePage, onNavigate }) {
  return (
    <nav className="app-navigation" aria-label="Navegacion principal">
      {navigationItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={activePage === item.id ? 'nav-button active' : 'nav-button'}
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
