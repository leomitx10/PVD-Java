package com.example.model;

public enum ProductCategory {
    ELETRONICOS("Eletrônicos"),
    VESTUARIO("Vestuário"),
    ALIMENTOS("Alimentos"),
    BEBIDAS("Bebidas"),
    LIMPEZA("Limpeza"),
    HIGIENE("Higiene"),
    MOVEIS("Móveis"),
    DECORACAO("Decoração"),
    OUTROS("Outros");

    private final String displayName;

    ProductCategory(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
