package com.example.controller;

import com.example.model.Product;
import com.example.model.ProductCategory;
import com.example.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/categories")
    public ResponseEntity<List<Map<String, String>>> getAllCategories() {
        try {
            logger.info("Buscando todas as categorias");
            List<Map<String, String>> categoryList = Arrays.stream(ProductCategory.values())
                    .map(cat -> {
                        Map<String, String> categoryMap = new HashMap<>();
                        categoryMap.put("value", cat.name());
                        categoryMap.put("label", cat.getDisplayName());
                        return categoryMap;
                    })
                    .collect(Collectors.toList());
            
            logger.info("Retornando lista de categorias: {}", categoryList);
            return ResponseEntity.ok(categoryList);
        } catch (Exception e) {
            logger.error("Erro ao buscar categorias", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        try {
            List<Product> products = productRepository.findAll();
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            logger.error("Erro ao buscar produtos", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        try {
            return productRepository.findById(id)
                    .map(ResponseEntity::ok)
                    .orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            logger.error("Erro ao buscar produto por ID: {}", id, e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        try {
            logger.info("Criando produto: {}", product);
            logger.info("Preço de custo: {}", product.getCostPrice());
            logger.info("Preço de venda: {}", product.getSellingPrice());
            
            Product savedProduct = productRepository.save(product);
            logger.info("Produto salvo com margem: {}", savedProduct.getProfitMargin());
            
            return ResponseEntity.ok(savedProduct);
        } catch (Exception e) {
            logger.error("Erro ao criar produto", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        try {
            if (!productRepository.existsById(id)) {
                return ResponseEntity.notFound().build();
            }
            product.setId(id);
            return ResponseEntity.ok(productRepository.save(product));
        } catch (Exception e) {
            logger.error("Erro ao atualizar produto", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        try {
            if (!productRepository.existsById(id)) {
                return ResponseEntity.notFound().build();
            }
            productRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            logger.error("Erro ao deletar produto", e);
            return ResponseEntity.internalServerError().build();
        }
    }
}
