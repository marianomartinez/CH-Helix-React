function createOrder() { // asignarlo a un botón de Checkout, supongo
  const newOrder = {
    buyer: { name: 'Poli', phone: '+541143432323', email: 'asd@asd' },
    items: [
      { id: '1', title: 'zapas', price: 200, quantity: 2 },
      { id: '2', title: 'gorro', price: 100, quantity: 1 },
    ],
    total: 500,
  }};