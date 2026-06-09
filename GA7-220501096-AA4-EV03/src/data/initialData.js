export const initialProducts = [
  {
    id: 1,
    name: 'Menu ejecutivo',
    description: 'Almuerzo completo del dia',
    price: 15000,
    stock: 20,
    category: 'Lunch',
    available: true
  },
  {
    id: 2,
    name: 'Limonada natural',
    description: 'Bebida fria preparada al momento',
    price: 5000,
    stock: 35,
    category: 'Beverage',
    available: true
  },
  {
    id: 3,
    name: 'Pechuga gratinada',
    description: 'Plato a la carta con acompanamiento',
    price: 22000,
    stock: 12,
    category: 'Main Course',
    available: true
  }
];

export const sampleOrders = [
  { id: 101, customer: 'Mesa 4', status: 'En preparacion', total: 42000 },
  { id: 102, customer: 'Domicilio - Cliente frecuente', status: 'Pendiente', total: 27500 },
  { id: 103, customer: 'Mesa 2', status: 'Entregado', total: 18000 }
];

export const sampleCustomers = [
  { id: 1, name: 'Cliente de mesa', phone: 'No aplica', type: 'Atencion en salon' },
  { id: 2, name: 'Cliente domicilio', phone: '3000000000', type: 'Domicilio' },
  { id: 3, name: 'Cliente reserva', phone: '3100000000', type: 'Reserva' }
];

export const sampleReservations = [
  { id: 1, customer: 'Reserva familiar', date: '2026-06-10', hour: '19:00', guests: 6 },
  { id: 2, customer: 'Cumpleanos', date: '2026-06-12', hour: '20:00', guests: 10 }
];

export const samplePayments = [
  { id: 1, method: 'Efectivo', amount: 42000, status: 'Registrado' },
  { id: 2, method: 'Transferencia', amount: 27500, status: 'Pendiente de validacion' }
];
