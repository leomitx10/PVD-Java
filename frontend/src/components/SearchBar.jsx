import React from 'react';
import {
  Paper,
  InputBase,
  IconButton,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch, onCategoryChange }) => {
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

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

  return (
    <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
      <Paper
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          maxWidth: '500px',
          boxShadow: 2
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar produtos..."
          inputProps={{ 'aria-label': 'buscar produtos' }}
          onChange={handleChange}
          autoFocus
        />
        <IconButton sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <FormControl 
        variant="outlined" 
        sx={{ 
          minWidth: 200,
          '& .MuiOutlinedInput-root': {
            borderRadius: 1,
            backgroundColor: 'white',
            boxShadow: 2
          }
        }}
      >
        <InputLabel>Categoria</InputLabel>
        <Select
          label="Categoria"
          defaultValue="TODOS"
          onChange={(e) => onCategoryChange(e.target.value)}
          sx={{ height: '40px' }}
        >
          {categories.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
