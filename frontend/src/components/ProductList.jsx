import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Alert,
  CircularProgress,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Pagination
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProductCard from './ProductCard';

const ITEMS_PER_PAGE_OPTIONS = [12, 24, 36, 48];

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('TODOS');
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_OPTIONS[0]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/products');
      if (!response.ok) {
        throw new Error('Erro ao carregar produtos');
      }
      const data = await response.json();
      const sortedProducts = data.sort((a, b) => a.name.localeCompare(b.name));
      setProducts(sortedProducts);
      setError(null);
    } catch (error) {
      setError('Erro ao carregar produtos: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = !searchTerm.trim() || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'TODOS' || 
      product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Paginação
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const categories = [
    { value: 'TODOS', label: 'Todas Categorias' },
    { value: 'ELETRONICOS', label: 'Eletrônicos' },
    { value: 'VESTUARIO', label: 'Vestuário' },
    { value: 'ALIMENTOS', label: 'Alimentos' },
    { value: 'BEBIDAS', label: 'Bebidas' },
    { value: 'LIMPEZA', label: 'Limpeza' },
    { value: 'HIGIENE', label: 'Higiene' },
    { value: 'MOVEIS', label: 'Móveis' },
    { value: 'DECORACAO', label: 'Decoração' },
    { value: 'OUTROS', label: 'Outros' }
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setPage(1);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleProductUpdate = (updatedProduct) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleProductDelete = (productId) => {
    setProducts(prevProducts => 
      prevProducts.filter(product => product.id !== productId)
    );
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Pesquisar"
              placeholder="Digite o nome do produto..."
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Categoria</InputLabel>
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                label="Categoria"
              >
                {categories.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Itens por página</InputLabel>
              <Select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(e.target.value);
                  setPage(1);
                }}
                label="Itens por página"
              >
                {ITEMS_PER_PAGE_OPTIONS.map(option => (
                  <MenuItem key={option} value={option}>
                    {option} itens
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {filteredProducts.length === 0 ? (
        <Alert severity="info">Nenhum produto encontrado</Alert>
      ) : (
        <>
          <Grid container spacing={3}>
            {paginatedProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard 
                  product={product} 
                  onProductUpdate={handleProductUpdate}
                  onProductDelete={handleProductDelete}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={Math.ceil(filteredProducts.length / itemsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
}

export default ProductList;
