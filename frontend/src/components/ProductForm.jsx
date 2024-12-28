import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  Paper,
  CircularProgress,
  Grid,
  InputAdornment
} from '@mui/material';

function ProductForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    name: '',
    category: '',
    costPrice: '',
    sellingPrice: '',
    quantity: ''
  });
  const [profitMargin, setProfitMargin] = useState({
    percentage: 0,
    value: 0
  });
  const [message, setMessage] = useState({ text: '', type: 'info' });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8080/api/products/categories', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Response:', {
            status: response.status,
            statusText: response.statusText,
            body: errorText
          });
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Categorias recebidas:', data);
        
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error('Formato inválido:', data);
          throw new Error('Formato de dados inválido');
        }
      } catch (error) {
        console.error('Erro detalhado:', error);
        setMessage({ 
          text: `Erro ao carregar categorias: ${error.message}`, 
          type: 'error' 
        });
        setCategories([]); // Garante que categories é sempre um array
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (product.costPrice && product.sellingPrice) {
      const cost = parseFloat(product.costPrice);
      const selling = parseFloat(product.sellingPrice);
      if (cost > 0) {
        const profit = selling - cost;
        const margin = (profit / cost) * 100;
        setProfitMargin({
          percentage: margin.toFixed(2),
          value: profit.toFixed(2)
        });
      }
    }
  }, [product.costPrice, product.sellingPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: product.name,
          category: product.category,
          costPrice: parseFloat(product.costPrice),
          sellingPrice: parseFloat(product.sellingPrice),
          quantity: parseInt(product.quantity)
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage({ text: 'Produto cadastrado com sucesso!', type: 'success' });
        setProduct({
          name: '',
          category: '',
          costPrice: '',
          sellingPrice: '',
          quantity: ''
        });
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setMessage({ text: 'Erro ao cadastrar produto: ' + data.message, type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Erro ao cadastrar produto: ' + error.message, type: 'error' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box component={Paper} sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Cadastro de Produto
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Nome do Produto"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Categoria</InputLabel>
              <Select
                name="category"
                value={product.category}
                onChange={handleChange}
                label="Categoria"
              >
                {categories.map((category) => (
                  <MenuItem key={category.value} value={category.value}>
                    {category.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Preço de Custo"
              name="costPrice"
              type="number"
              value={product.costPrice}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Preço de Venda"
              name="sellingPrice"
              type="number"
              value={product.sellingPrice}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Margem de Lucro"
              value={`${profitMargin.percentage}% (R$ ${profitMargin.value})`}
              InputProps={{
                readOnly: true,
                style: { color: '#2e7d32' }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Quantidade"
              name="quantity"
              type="number"
              value={product.quantity}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              size="large"
            >
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
      
      {message.text && (
        <Alert 
          severity={message.type} 
          sx={{ mt: 2 }}
        >
          {message.text}
        </Alert>
      )}
    </Box>
  );
}

export default ProductForm;
