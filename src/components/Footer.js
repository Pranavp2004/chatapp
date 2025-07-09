import { Box, Typography, Divider, Link } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mb: 4 }}>
            <Box sx={{ mb: { xs: 4, md: 0 } }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 700, mb: 2 }}>
                Pranav P
              </Typography>
              <Typography variant="body1">
                Computer Science Engineer | Full Stack Developer
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Link href="#about" color="inherit" underline="hover" sx={{ mb: 1 }}>
                  About
                </Link>
                <Link href="#skills" color="inherit" underline="hover" sx={{ mb: 1 }}>
                  Skills
                </Link>
                <Link href="#projects" color="inherit" underline="hover" sx={{ mb: 1 }}>
                  Projects
                </Link>
                <Link href="#contact" color="inherit" underline="hover">
                  Contact
                </Link>
              </Box>
            </Box>
          </Box>
          
          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 4 }} />
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} Pranav P. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ mt: { xs: 2, md: 0 } }}>
              Designed and built with ❤️ by Pranav P
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Footer;