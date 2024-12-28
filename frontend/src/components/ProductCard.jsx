import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Snackbar,
  Alert,
  InputAdornment,
  DialogContentText
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductCard = ({ product, onProductUpdate, onProductDelete }) => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [profitMargin, setProfitMargin] = useState({
    percentage: 0,
    value: 0
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  useEffect(() => {
    if (editedProduct.costPrice && editedProduct.sellingPrice) {
      const cost = parseFloat(editedProduct.costPrice);
      const selling = parseFloat(editedProduct.sellingPrice);
      if (cost > 0) {
        const profit = selling - cost;
        const margin = (profit / cost) * 100;
        setProfitMargin({
          percentage: margin.toFixed(2),
          value: profit.toFixed(2)
        });
      }
    }
  }, [editedProduct.costPrice, editedProduct.sellingPrice]);

  const categories = [
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditedProduct(product);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/${product.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct)
      });

      if (response.ok) {
        // Atualiza o produto no estado do pai
        onProductUpdate(editedProduct);
        
        // Mostra mensagem de sucesso
        setSnackbar({
          open: true,
          message: 'Produto atualizado com sucesso!',
          severity: 'success'
        });
        
        handleClose();
      } else {
        setSnackbar({
          open: true,
          message: 'Erro ao atualizar produto. Tente novamente.',
          severity: 'error'
        });
      }
    } catch (error) {
      console.error('Erro ao salvar:', error);
      setSnackbar({
        open: true,
        message: 'Erro ao atualizar produto. Tente novamente.',
        severity: 'error'
      });
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/${product.id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Produto excluído com sucesso!',
          severity: 'success'
        });
        onProductDelete(product.id);
        handleClose();
      } else {
        setSnackbar({
          open: true,
          message: 'Erro ao excluir produto. Tente novamente.',
          severity: 'error'
        });
      }
    } catch (error) {
      console.error('Erro ao excluir:', error);
      setSnackbar({
        open: true,
        message: 'Erro ao excluir produto. Tente novamente.',
        severity: 'error'
      });
    }
    setDeleteDialogOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <>
      <Card sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          cursor: 'pointer'
        }
      }}>
        <CardActionArea onClick={handleOpen} sx={{ height: '100%' }}>
          <CardMedia
            component="div"
            sx={{
              pt: '56.25%',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography color="text.secondary">
              {product.category}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="primary">
                {formatPrice(product.sellingPrice)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Estoque: {product.quantity} unidades
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }
        }}
      >
        <DialogTitle sx={{ 
          m: 0, 
          p: 2, 
          bgcolor: 'primary.main', 
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {isEditing ? 'Editar Produto' : 'Detalhes do Produto'}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ p: 3 }}>
          {isEditing ? (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nome do Produto"
                  name="name"
                  value={editedProduct.name}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Categoria</InputLabel>
                  <Select
                    name="category"
                    value={editedProduct.category}
                    onChange={handleChange}
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

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preço de Custo"
                  name="costPrice"
                  type="number"
                  value={editedProduct.costPrice}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preço de Venda"
                  name="sellingPrice"
                  type="number"
                  value={editedProduct.sellingPrice}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>
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
                  fullWidth
                  label="Quantidade em Estoque"
                  name="quantity"
                  type="number"
                  value={editedProduct.quantity}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  {product.name}
                </Typography>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Categoria: {product.category}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ 
                  bgcolor: 'background.default', 
                  p: 2, 
                  borderRadius: 1,
                  mt: 1 
                }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <Typography variant="body2" color="text.secondary">
                        Preço de Custo
                      </Typography>
                      <Typography variant="h6">
                        {formatPrice(product.costPrice)}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} md={4}>
                      <Typography variant="body2" color="text.secondary">
                        Preço de Venda
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {formatPrice(product.sellingPrice)}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Typography variant="body2" color="text.secondary">
                        Margem de Lucro
                      </Typography>
                      <Typography variant="h6" color="success.main">
                        {(() => {
                          const lucro = product.sellingPrice - product.costPrice;
                          const margemLucro = (lucro / product.costPrice) * 100;
                          return `${margemLucro.toFixed(2)}%`
                        })()}
                      </Typography>
                      <Typography variant="body2" color="success.main">
                        {formatPrice(product.sellingPrice - product.costPrice)}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Divider sx={{ my: 1 }} />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        Quantidade em Estoque
                      </Typography>
                      <Typography variant="h6">
                        {product.quantity} unidades
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 2, bgcolor: 'background.default', justifyContent: 'space-between' }}>
          <Button
            onClick={() => setDeleteDialogOpen(true)}
            color="error"
            startIcon={<DeleteIcon />}
          >
            Excluir
          </Button>
          <Box>
            {isEditing ? (
              <>
                <Button onClick={handleClose} color="inherit" sx={{ mr: 1 }}>
                  Cancelar
                </Button>
                <Button onClick={handleSave} variant="contained" color="primary">
                  Salvar
                </Button>
              </>
            ) : (
              <>
                <Button onClick={handleClose} color="inherit" sx={{ mr: 1 }}>
                  Fechar
                </Button>
                <Button
                  onClick={handleEdit}
                  variant="contained"
                  color="primary"
                  startIcon={<EditIcon />}
                >
                  Editar
                </Button>
              </>
            )}
          </Box>
        </DialogActions>
      </Dialog>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ pt: 3 }}>
          Confirmar Exclusão
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja excluir o produto "{product.name}"? Esta ação não pode ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setDeleteDialogOpen(false)} color="inherit">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="error" variant="contained" autoFocus>
            Excluir
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;
