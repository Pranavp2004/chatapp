import { Box, Typography, Grid, Paper, Avatar, Divider, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

const hobbies = [
  { icon: '🎨', name: 'Digital Art', description: 'Creating digital illustrations and designs' },
  { icon: '✈️', name: 'Travel', description: 'Exploring new cultures and landscapes' },
  { icon: '📚', name: 'Reading', description: 'Tech blogs and sci-fi novels' },
  { icon: '🎵', name: 'Music', description: 'Playing guitar and composing' },
  { icon: '🍳', name: 'Cooking', description: 'Experimenting with new recipes' }
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    y: -10,
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
    transition: { duration: 0.3 }
  };

  return (
    <Box id="achievements" sx={ 
      { 
        py: 10, 
        px: { xs: 3, md: 6 },
        bgcolor: 'background.default',
        position: 'relative'
      }
    }>
      {/* Decorative elements */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '40%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, transparent 100%)',
        zIndex: 0,
        clipPath: 'polygon(0 0, 0% 100%, 100% 100%)'
      }}/>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h2" align="center" sx={{
            mb: 6,
            fontWeight: 800,
            background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // Removed display: 'inline-block' and ensured centering with align
          }}>
            Achievements & Hobbies
          </Typography>
        </motion.div>

        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div 
              variants={itemVariants}
              whileHover={hoverEffect}
            >
              <Paper sx={{
                p: 5,
                height: '100%',
                borderRadius: 10,
                bgcolor: 'background.paper',
                boxShadow: 6
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Box sx={{ 
                    width: 70, 
                    height: 70, 
                    bgcolor: '#f59e0b', 
                    color: 'white',
                    borderRadius: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 4
                  }}>
                    <StarIcon fontSize="large" />
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      Academic Excellence
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Various Institutions • 2015-2026
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
                  Achieved top grades across secondary, higher secondary, and B.Tech levels, with a consistent record of excellence.
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Secondary School (J.M.H.S Sasthamcotta)
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    98.2% • 2015-2020
                  </Typography>
                  <Divider sx={{ my: 1 }}/>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Higher Secondary (V.G.S.S.A.H.S.S Nediyavila)
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    94.5% • 2020-2022
                  </Typography>
                  <Divider sx={{ my: 1 }}/>
                </Box>

                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    B.Tech Computer Science (Amrita Vishwa Vidyapeetham)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    6.45 CGPA • 2022-2026
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 2 }}>
                  <Chip label="Academic" sx={{ bgcolor: '#f59e0b', color: 'white', fontWeight: 500 }} />
                  <Chip label="Excellence" sx={{ bgcolor: '#f59e0b', color: 'white', fontWeight: 500 }} />
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div 
              variants={itemVariants}
              whileHover={hoverEffect}
            >
              <Paper sx={{
                p: 5,
                height: '100%',
                borderRadius: 10,
                bgcolor: 'background.paper',
                boxShadow: 6
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Box sx={{ 
                    width: 70, 
                    height: 70, 
                    bgcolor: '#3b82f6', 
                    color: 'white',
                    borderRadius: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 4
                  }}>
                    <StarIcon fontSize="large" />
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      Leadership & Service
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Various Organizations • 2019-2023
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
                  Demonstrated leadership and community service through various roles and initiatives.
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    NCC Leader
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    National-level camp experience • 2019-2020
                  </Typography>
                  <Divider sx={{ my: 1 }}/>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Active NSS Cadet
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Community service initiatives • 2020-2022
                  </Typography>
                  <Divider sx={{ my: 1 }}/>
                </Box>

                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    SSR Project Leader
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    HTML workshop for high school students • 2023
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 2 }}>
                  <Chip label="Leadership" sx={{ bgcolor: '#3b82f6', color: 'white', fontWeight: 500 }} />
                  <Chip label="Service" sx={{ bgcolor: '#3b82f6', color: 'white', fontWeight: 500 }} />
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div variants={itemVariants}>
          <Typography variant="h4" align="center" sx={{ 
            mb: 4,
            fontWeight: 700,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
          }}>
            <span>🎯</span> My Hobbies & Interests
          </Typography>
        </motion.div>

        <Grid container spacing={3} justifyContent="center">
          {hobbies.map((hobby, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Paper sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 4,
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText'
                  }
                }}>
                  <Avatar sx={{ 
                    width: 60, 
                    height: 60,
                    fontSize: '2rem',
                    mb: 2,
                    bgcolor: 'transparent'
                  }}>
                    {hobby.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {hobby.name}
                  </Typography>
                  <Typography variant="caption">
                    {hobby.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Achievements;