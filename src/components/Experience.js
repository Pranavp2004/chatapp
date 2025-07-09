import { Box, Typography, Paper, Grid, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';
import { motion } from 'framer-motion';
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Development Intern",
      company: "Tech Innovate Labs",
      duration: "May 2024 - Aug 2024",
      description: "Designed and deployed a full-featured e-commerce platform using the MERN stack, optimizing performance with MongoDB indexing and Node.js APIs, enhancing user experience by 30%.",
      icon: <CodeIcon fontSize="large" />,
      tags: ["MongoDB", "Express", "React", "Node.js", "API Design"],
    },
    {
      title: "SSR Project Leader",
      company: "Amrita Vishwa Vidyapeetham",
      duration: "Jun 2023 - Jul 2023",
      description: "Led a team of 6 to conduct an HTML/CSS workshop for 50+ high school students, creating interactive tutorials and fostering a 40% increase in student engagement in coding.",
      icon: <PeopleIcon fontSize="large" />,
      tags: ["Leadership", "Teaching", "HTML", "CSS", "Mentorship"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardHover = {
    y: -10,
    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
    transition: { duration: 0.3 },
  };

  return (
    <Box id="experience" sx={{ py: 12, px: { xs: 2, md: 10 }, bgcolor: 'background.default', position: 'relative' }}>
      <Box sx={{
        position: 'absolute', top: '10%', left: '5%', width: 150, height: 150,
        background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0,
      }} />
      
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={itemVariants}>
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 800, color: 'primary.main', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            My Experience
          </Typography>
        </motion.div>

        <Grid container spacing={5} justifyContent="center">
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div variants={itemVariants} whileHover={cardHover}>
                <Paper elevation={6} sx={{ p: 4, height: '100%', borderRadius: 8, bgcolor: 'background.paper' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Box sx={{ width: 70, height: 70, bgcolor: 'primary.main', color: 'white', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 3 }}>
                      {exp.icon}
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {exp.company} | {exp.duration}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" paragraph sx={{ mb: 3, color: 'text.primary' }}>
                    {exp.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.tags.map((tag, i) => (
                      <Chip key={i} label={tag} size="medium" sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', mr: 1 }} />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center', width: '100%' }}> {/* Ensured full width and centered text */}
          <motion.div variants={itemVariants}>
            <Typography variant="h4" align="center" gutterBottom sx={{ 
              mb: 4, 
              fontWeight: 900, // Bolder weight for emphasis
              background: 'linear-gradient(90deg, #26a69a, #66bb6a)', // Teal to green gradient
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 10px rgba(38,166,154,0.3)', // Stronger shadow for pop
              padding: '0 20px', // Added padding to ensure text fits well
              display: 'inline-block',
            }}>
              Leadership & Extracurricular
            </Typography>
          </motion.div>

          <Grid container spacing={5} justifyContent="center"> {/* Added justifyContent="center" to Grid */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants} whileHover={cardHover}>
                <Paper elevation={6} sx={{ p: 4, height: '100%', borderRadius: 8, bgcolor: 'background.paper' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Box sx={{ width: 70, height: 70, bgcolor: '#26a69a', color: 'white', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 3 }}>
                      <WorkIcon fontSize="large" />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        NCC Leader
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        National Cadet Corps | 2019-2020
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" paragraph>
                    Led a team of 20 cadets at a national-level camp, earning a certificate of excellence for teamwork and strategic planning.
                  </Typography>
                  <Chip label="Leadership" sx={{ bgcolor: '#26a69a', color: 'white', mr: 1 }} />
                  <Chip label="Teamwork" sx={{ bgcolor: '#26a69a', color: 'white' }} />
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants} whileHover={cardHover}>
                <Paper elevation={6} sx={{ p: 4, height: '100%', borderRadius: 8, bgcolor: 'background.paper' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Box sx={{ width: 70, height: 70, bgcolor: '#66bb6a', color: 'white', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 3 }}>
                      <PeopleIcon fontSize="large" />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        NSS Cadet
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        National Service Scheme | 2020-2022
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" paragraph>
                    Organized community service events, impacting 100+ locals, and received an award for outstanding volunteerism.
                  </Typography>
                  <Chip label="Community Service" sx={{ bgcolor: '#66bb6a', color: 'white', mr: 1 }} />
                  <Chip label="Social Responsibility" sx={{ bgcolor: '#66bb6a', color: 'white' }} />
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Experience;