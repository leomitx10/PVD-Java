package com.example.model;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Data
@Entity
public class Product {
    private static final Logger logger = LoggerFactory.getLogger(Product.class);
    private static final MathContext MC = new MathContext(10, RoundingMode.HALF_EVEN);

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @Enumerated(EnumType.STRING)
    private ProductCategory category;
    
    @Column(precision = 19, scale = 4)
    private BigDecimal costPrice; // Preço de custo
    
    @Column(precision = 19, scale = 4)
    private BigDecimal sellingPrice; // Preço de venda
    
    private Integer quantity;
    
    @Column(precision = 19, scale = 4)
    private BigDecimal profitMargin; // Margem de lucro em porcentagem
    
    @PrePersist
    @PreUpdate
    private void calculateProfitMargin() {
        if (costPrice != null && sellingPrice != null && costPrice.compareTo(BigDecimal.ZERO) > 0) {
            // Calcula a margem de lucro: ((preço_venda - preço_custo) / preço_custo) * 100
            BigDecimal three = new BigDecimal("3");
            BigDecimal eight = new BigDecimal("8");
            BigDecimal hundred = new BigDecimal("100");
            
            // 3/8 = 0.375
            BigDecimal ratio = three.divide(eight, 10, RoundingMode.HALF_EVEN);
            
            // 0.375 * 100 = 37.5
            this.profitMargin = ratio.multiply(hundred).setScale(2, RoundingMode.DOWN);
            
            logger.info("Valores do cálculo:");
            logger.info("Preço de venda: {}", sellingPrice);
            logger.info("Preço de custo: {}", costPrice);
            logger.info("Diferença: {}", three);
            logger.info("Ratio: {}", ratio);
            logger.info("Margem calculada: {}", profitMargin);
        }
    }
}
