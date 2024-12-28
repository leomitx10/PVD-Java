import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a237e',
        color: 'white',
        py: { xs: 4, sm: 6 },
        width: '100%'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Sobre */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant={isMobile ? 'h6' : 'h5'} gutterBottom>
              Sobre Nós
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 2,
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              Sistema completo para gerenciamento de produtos e controle de estoque.
              Desenvolvido para facilitar sua gestão empresarial.
            </Typography>
          </Grid>

          {/* Links Rápidos */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant={isMobile ? 'h6' : 'h5'} gutterBottom>
              Links Rápidos
            </Typography>
            <Stack spacing={isMobile ? 1 : 1.5}>
              <Link href="/cadastros" color="inherit" underline="hover">
                Cadastrar Produto
              </Link>
              <Link href="/" color="inherit" underline="hover">
                Consultar Estoque
              </Link>
              <Link href="/relatorios" color="inherit" underline="hover">
                Relatórios
              </Link>
              <Link href="/configuracoes" color="inherit" underline="hover">
                Configurações
              </Link>
            </Stack>
          </Grid>

          {/* Contato */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant={isMobile ? 'h6' : 'h5'} gutterBottom>
              Contato
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize={isMobile ? 'small' : 'medium'} />
                <Typography 
                  variant="body2"
                  sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                >
                  Rua Example, 123 - São Paulo, SP
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize={isMobile ? 'small' : 'medium'} />
                <Typography 
                  variant="body2"
                  sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                >
                  (11) 1234-5678
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize={isMobile ? 'small' : 'medium'} />
                <Typography 
                  variant="body2"
                  sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                >
                  contato@empresa.com
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Redes Sociais e Copyright */}
        <Box sx={{ 
          mt: { xs: 3, sm: 5 },
          pt: 3,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: 2, sm: 0 }
        }}>
          <Typography 
            variant="body2" 
            color="white"
            textAlign={{ xs: 'center', sm: 'left' }}
            sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
          >
            {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.
          </Typography>
          
          <Stack 
            direction="row" 
            spacing={{ xs: 1, sm: 2 }}
            justifyContent={{ xs: 'center', sm: 'flex-end' }}
          >
            <IconButton 
              color="inherit" 
              size={isMobile ? 'small' : 'medium'}
              sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
            >
              <FacebookIcon fontSize={isMobile ? 'small' : 'medium'} />
            </IconButton>
            <IconButton 
              color="inherit" 
              size={isMobile ? 'small' : 'medium'}
              sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
            >
              <TwitterIcon fontSize={isMobile ? 'small' : 'medium'} />
            </IconButton>
            <IconButton 
              color="inherit" 
              size={isMobile ? 'small' : 'medium'}
              sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
            >
              <InstagramIcon fontSize={isMobile ? 'small' : 'medium'} />
            </IconButton>
            <IconButton 
              color="inherit" 
              size={isMobile ? 'small' : 'medium'}
              sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
            >
              <LinkedInIcon fontSize={isMobile ? 'small' : 'medium'} />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
