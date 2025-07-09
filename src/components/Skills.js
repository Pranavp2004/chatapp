import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, LinearProgress, useTheme, Tooltip, Zoom } from '@mui/material';
import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, ChartTooltip, Legend);

const Skills = () => {
  const theme = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = [
    { name: 'JavaScript', level: 90, icon: '💻', color: '#F0DB4F', description: 'Advanced proficiency in dynamic web applications' },
    { name: 'React', level: 85, icon: '⚛️', color: '#61DAFB', description: 'Expert in building reusable UI components' },
    { name: 'Node.js', level: 80, icon: '🟢', color: '#68A063', description: 'Skilled in server-side development' },
    { name: 'Python', level: 75, icon: '🐍', color: '#3776AB', description: 'Proficient in data analysis and automation' },
    { name: 'C++', level: 70, icon: '➕➕', color: '#00599C', description: 'Strong in algorithm optimization' },
    { name: 'MongoDB', level: 65, icon: '🍃', color: '#47A248', description: 'Experienced with NoSQL databases' },
    { name: 'AWS', level: 60, icon: '☁️', color: '#FF9900', description: 'Competent in cloud infrastructure' },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: '🧩', description: 'Tackling complex challenges with logic' },
    { name: 'Team Leadership', icon: '👥', description: 'Guiding teams to success' },
    { name: 'Communication', icon: '💬', description: 'Effective collaboration and presentation' },
  ];

  const chartData = {
    labels: skillsData.map(skill => skill.name),
    datasets: [{ data: skillsData.map(skill => skill.level), backgroundColor: skillsData.map(skill => skill.color), borderColor: theme.palette.background.paper, borderWidth: 2, hoverOffset: 20 }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: { legend: { display: false }, tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}%` }, displayColors: false, bodyFont: { weight: 'bold', size: 14 } } },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const skillHover = {
    scale: 1.08,
    boxShadow: theme.shadows[12],
    zIndex: 1,
    transition: { duration: 0.2 },
  };

  return (
    <Box id="skills" sx={{ py: 12, px: { xs: 2, sm: 4 }, bgcolor: 'background.default', textAlign: 'center', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ position: 'absolute', top: '20%', left: '10%', width: 350, height: 350, borderRadius: '50%', background: `radial-gradient(circle, ${theme.palette.primary.light}30 0%, transparent 70%)` }}
      />
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={item}>
          <Typography variant="h2" sx={{
            mb: 6, fontWeight: 800,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}>
            My Technical Expertise
          </Typography>
        </motion.div>

        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} md={8} lg={6}>
            <motion.div variants={item} whileHover={skillHover}>
              <Paper sx={{
                p: 4, borderRadius: 8, position: 'relative', overflow: 'hidden', bgcolor: 'background.paper', boxShadow: theme.shadows[8],
                '&:before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` },
              }}>
                <Box sx={{ width: '100%', height: 350, position: 'relative', mb: 4 }}>
                  <Doughnut data={chartData} options={chartOptions} />
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {hoveredSkill?.level || 'Skills'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {hoveredSkill?.name || 'Hover to Explore'}
                    </Typography>
                  </Box>
                </Box>

                <Grid container spacing={2} justifyContent="center">
                  {skillsData.map((skill, index) => (
                    <Grid item xs={6} sm={4} key={index}>
                      <Tooltip title={`${skill.level}% - ${skill.description}`} arrow TransitionComponent={Zoom}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <Paper sx={{
                            p: 2, borderRadius: 6, textAlign: 'center', bgcolor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
                            borderLeft: `6px solid ${skill.color}`, transition: 'all 0.3s ease',
                          }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                              {skill.icon} {skill.name}
                            </Typography>
                            <LinearProgress variant="determinate" value={skill.level} sx={{
                              height: 10, borderRadius: 5, backgroundColor: theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0',
                              '& .MuiLinearProgress-bar': { borderRadius: 5, backgroundColor: skill.color },
                            }} />
                          </Paper>
                        </motion.div>
                      </Tooltip>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div variants={item} sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{
            mb: 4, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 2,
          }}>
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              ✨
            </motion.span>
            Soft Skills
            <motion.span animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
              ✨
            </motion.span>
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3, maxWidth: 700, mx: 'auto' }}>
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.15, boxShadow: theme.shadows[8] }}
                whileTap={{ scale: 0.95 }}
              >
                <Paper sx={{
                  px: 4, py: 2.5, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 2,
                  bgcolor: 'background.paper', boxShadow: theme.shadows[6], transition: 'all 0.3s ease',
                }}>
                  <Typography variant="h5">{skill.icon}</Typography>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{skill.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{skill.description}</Typography>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Skills;