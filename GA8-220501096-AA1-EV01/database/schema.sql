CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    unit_price NUMERIC(10, 2) NOT NULL,
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    category VARCHAR(80) NOT NULL,
    is_available BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS customer_orders (
    order_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    table_number VARCHAR(20),
    order_status VARCHAR(30) NOT NULL DEFAULT 'REGISTRADO',
    total_amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    unit_price NUMERIC(10, 2) NOT NULL,
    subtotal NUMERIC(10, 2) NOT NULL,
    CONSTRAINT fk_order_items_order FOREIGN KEY (order_id) REFERENCES customer_orders(order_id) ON DELETE CASCADE,
    CONSTRAINT fk_order_items_product FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO products (
    product_name,
    description,
    unit_price,
    stock_quantity,
    category,
    is_available
)
VALUES
    (
        'Menu ejecutivo',
        'Almuerzo completo del dia',
        15000,
        20,
        'Lunch',
        TRUE
    ),
    (
        'Limonada natural',
        'Bebida fria preparada al momento',
        5000,
        35,
        'Beverage',
        TRUE
    ),
    (
        'Pechuga gratinada',
        'Plato a la carta con acompanamiento',
        22000,
        12,
        'Main Course',
        TRUE
    )
ON CONFLICT DO NOTHING;