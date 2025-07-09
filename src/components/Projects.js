import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Link, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Secure File Transfer',
      description: 'Developed a robust file transfer system using Java and TLS 1.3, achieving a 90% reduction in vulnerabilities with end-to-end encryption.',
      image: './secure-file-transfer.jpg',
      link: 'https://github.com/pranavp2242/secure-file-transfer',
      tech: ['Java', 'TLS 1.3', 'Security'],
    },
    {
      title: 'Portfolio Website',
      description: 'Crafted a responsive, dynamic portfolio using React and MUI, featuring interactive elements and a sleek, modern design.',
      image: '/portfolio-website.jpg',
      link: 'https://github.com/pranavp2242/portfolio',
      tech: ['React', 'MUI', 'JavaScript'],
    },
  ];

  const cardHover = {
    scale: 1.03,
    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
    transition: { duration: 0.3 },
  };

  return (
    <Box id="projects" sx={{ py: 12, px: { xs: 2, sm: 4, md: 6 }, bgcolor: 'background.default', maxWidth: 1200, mx: 'auto', position: 'relative' }}>
      <Box sx={{
        position: 'absolute', top: '10%', right: '5%', width: 150, height: 150,
        background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0,
      }} />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 800, color: 'primary.main', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          My Projects
        </Typography>
      </motion.div>

      <Grid container spacing={5} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={cardHover} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={project.image || 'https://via.placeholder.com/300x250'}
                  alt={project.title}
                  sx={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography gutterBottom variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.tech.map((tech, i) => (
                      <Chip key={i} label={tech} sx={{ mr: 1, mb: 1, bgcolor: 'primary.light', color: 'primary.contrastText' }} />
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    sx={{ mt: 'auto', borderRadius: 8, textTransform: 'none', px: 3 }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Dive deeper into web development trends:
        </Typography>
        <Link href="https://blog.hubspot.com/website/web-development" target="_blank" rel="noopener">
          <Button variant="outlined" sx={{ borderRadius: 8, textTransform: 'none', px: 3 }}>
            Explore Blog
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Projects;