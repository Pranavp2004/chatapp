import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      id="home"
      sx={{
        height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        textAlign: 'center', background: 'linear-gradient(135deg, #1a237e 0%, #283593 70%, #3949ab 100%)',
        color: 'white', px: 4, position: 'relative', overflow: 'hidden',
      }}
    >
      <motion.div
        style={{ position: 'absolute', top: '15%', left: '15%', width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        style={{ position: 'absolute', bottom: '10%', right: '10%', width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 2 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography variant={isMobile ? 'h3' : 'h1'} gutterBottom sx={{ mb: 2, fontWeight: 900, textShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
          Pranav P
        </Typography>
        <Typography variant={isMobile ? 'h5' : 'h4'} component="h2" gutterBottom sx={{ mb: 4, fontWeight: 700 }}>
          Computer Science Engineer | Full Stack Innovator
        </Typography>
        <Typography variant={isMobile ? 'body1' : 'h6'} sx={{ maxWidth: 800, mb: 6, fontWeight: 500 }}>
          I transform ideas into cutting-edge solutions with expertise in MERN stack, cryptography, and cloud technologies, driven by a passion for technology and creativity.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.div whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
            <Button
              variant="contained" color="secondary" size="large"
              component={Link} to="projects" spy={true} smooth={true} duration={500}
              sx={{ minWidth: 200, borderRadius: 12 }}
            >
              Explore My Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
            <Button
              variant="outlined" color="inherit" size="large"
              component={Link} to="contact" spy={true} smooth={true} duration={500}
              sx={{ minWidth: 200, borderRadius: 12, color: 'white', borderColor: 'white' }}
            >
              Get in Touch
            </Button>
          </motion.div>
        </Box>
      </motion.div>

      <Box sx={{ position: 'absolute', bottom: 40 }}>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Typography variant="caption" display="block" sx={{ mb: 1, fontWeight: 600 }}>
            Scroll to Discover
          </Typography>
          <Box sx={{ width: 30, height: 30, borderRight: '3px solid white', borderBottom: '3px solid white', transform: 'rotate(45deg)', mx: 'auto' }} />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;