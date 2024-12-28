import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import './App.css'

// Criando o tema
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cadastros" element={<ProductForm />} />
              <Route path="/configuracoes" element={<div>Página de Configurações em construção</div>} />
              <Route path="/relatorios" element={<div>Página de Relatórios em construção</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
