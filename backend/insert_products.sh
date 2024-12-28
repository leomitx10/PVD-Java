#!/bin/bash

# Produtos Eletrônicos
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Smartphone Galaxy S21","category":"ELETRONICOS","purchasePrice":2500.00,"sellingPrice":3499.99,"stockQuantity":15}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Smart TV 55 4K","category":"ELETRONICOS","purchasePrice":3000.00,"sellingPrice":4299.99,"stockQuantity":8}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Notebook Dell","category":"ELETRONICOS","purchasePrice":4000.00,"sellingPrice":5499.99,"stockQuantity":10}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Fone Bluetooth","category":"ELETRONICOS","purchasePrice":100.00,"sellingPrice":199.99,"stockQuantity":25}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Tablet iPad","category":"ELETRONICOS","purchasePrice":3500.00,"sellingPrice":4799.99,"stockQuantity":12}'

# Produtos Vestuário
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Camiseta Polo","category":"VESTUARIO","purchasePrice":45.00,"sellingPrice":89.99,"stockQuantity":50}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Calça Jeans","category":"VESTUARIO","purchasePrice":80.00,"sellingPrice":159.99,"stockQuantity":30}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Vestido Casual","category":"VESTUARIO","purchasePrice":90.00,"sellingPrice":179.99,"stockQuantity":20}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Blazer Social","category":"VESTUARIO","purchasePrice":150.00,"sellingPrice":299.99,"stockQuantity":15}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Sapato Social","category":"VESTUARIO","purchasePrice":120.00,"sellingPrice":249.99,"stockQuantity":25}'

# Produtos Alimentos
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Arroz Integral 1kg","category":"ALIMENTOS","purchasePrice":5.00,"sellingPrice":8.99,"stockQuantity":100}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Feijão Preto 1kg","category":"ALIMENTOS","purchasePrice":6.00,"sellingPrice":9.99,"stockQuantity":80}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Macarrão 500g","category":"ALIMENTOS","purchasePrice":3.00,"sellingPrice":5.99,"stockQuantity":120}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Azeite 500ml","category":"ALIMENTOS","purchasePrice":15.00,"sellingPrice":24.99,"stockQuantity":40}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Café 500g","category":"ALIMENTOS","purchasePrice":10.00,"sellingPrice":18.99,"stockQuantity":60}'

# Produtos Bebidas
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Refrigerante 2L","category":"BEBIDAS","purchasePrice":4.00,"sellingPrice":7.99,"stockQuantity":150}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Suco Natural 1L","category":"BEBIDAS","purchasePrice":5.00,"sellingPrice":9.99,"stockQuantity":80}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Água Mineral 500ml","category":"BEBIDAS","purchasePrice":1.00,"sellingPrice":2.49,"stockQuantity":200}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Cerveja 350ml","category":"BEBIDAS","purchasePrice":2.50,"sellingPrice":4.99,"stockQuantity":100}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Vinho Tinto 750ml","category":"BEBIDAS","purchasePrice":30.00,"sellingPrice":59.99,"stockQuantity":30}'

# Produtos Limpeza
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Detergente 500ml","category":"LIMPEZA","purchasePrice":1.50,"sellingPrice":3.99,"stockQuantity":120}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Sabão em Pó 1kg","category":"LIMPEZA","purchasePrice":8.00,"sellingPrice":15.99,"stockQuantity":80}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Desinfetante 1L","category":"LIMPEZA","purchasePrice":4.00,"sellingPrice":8.99,"stockQuantity":90}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Multiuso 500ml","category":"LIMPEZA","purchasePrice":3.50,"sellingPrice":7.99,"stockQuantity":100}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Álcool 70% 1L","category":"LIMPEZA","purchasePrice":5.00,"sellingPrice":9.99,"stockQuantity":150}'

# Produtos Higiene
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Sabonete","category":"HIGIENE","purchasePrice":1.00,"sellingPrice":2.99,"stockQuantity":200}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Shampoo 400ml","category":"HIGIENE","purchasePrice":8.00,"sellingPrice":15.99,"stockQuantity":80}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Pasta de Dente","category":"HIGIENE","purchasePrice":2.50,"sellingPrice":4.99,"stockQuantity":150}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Papel Higiênico","category":"HIGIENE","purchasePrice":10.00,"sellingPrice":18.99,"stockQuantity":100}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Desodorante","category":"HIGIENE","purchasePrice":7.00,"sellingPrice":14.99,"stockQuantity":90}'

# Produtos Móveis
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Sofá 3 Lugares","category":"MOVEIS","purchasePrice":800.00,"sellingPrice":1499.99,"stockQuantity":5}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Mesa de Jantar","category":"MOVEIS","purchasePrice":400.00,"sellingPrice":799.99,"stockQuantity":8}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Guarda-Roupa","category":"MOVEIS","purchasePrice":600.00,"sellingPrice":1199.99,"stockQuantity":6}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Cama Box Casal","category":"MOVEIS","purchasePrice":700.00,"sellingPrice":1399.99,"stockQuantity":7}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Rack para TV","category":"MOVEIS","purchasePrice":200.00,"sellingPrice":399.99,"stockQuantity":10}'

# Produtos Decoração
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Quadro Decorativo","category":"DECORACAO","purchasePrice":50.00,"sellingPrice":99.99,"stockQuantity":20}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Vaso de Planta","category":"DECORACAO","purchasePrice":30.00,"sellingPrice":59.99,"stockQuantity":25}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Tapete 2x1.5m","category":"DECORACAO","purchasePrice":100.00,"sellingPrice":199.99,"stockQuantity":15}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Luminária de Mesa","category":"DECORACAO","purchasePrice":40.00,"sellingPrice":79.99,"stockQuantity":30}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Espelho Decorativo","category":"DECORACAO","purchasePrice":80.00,"sellingPrice":159.99,"stockQuantity":12}'

# Produtos Outros
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Material Escolar Kit","category":"OUTROS","purchasePrice":30.00,"sellingPrice":59.99,"stockQuantity":40}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Brinquedo Educativo","category":"OUTROS","purchasePrice":25.00,"sellingPrice":49.99,"stockQuantity":35}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Ferramentas Básicas","category":"OUTROS","purchasePrice":70.00,"sellingPrice":139.99,"stockQuantity":20}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Guarda-Chuva","category":"OUTROS","purchasePrice":15.00,"sellingPrice":29.99,"stockQuantity":50}'
curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Pilhas AA Pack","category":"OUTROS","purchasePrice":10.00,"sellingPrice":19.99,"stockQuantity":100}'
