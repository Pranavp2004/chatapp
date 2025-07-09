import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <Box id="education" sx={{ py: 12, px: { xs: 3, md: 12 }, bgcolor: 'background.default', position: 'relative' }}>
      <Box sx={{
        position: 'absolute', top: '5%', right: '10%', width: 180, height: 180,
        background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0,
      }} />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 8, fontWeight: 800, color: 'primary.main', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          My Educational Journey
        </Typography>
      </motion.div>
      
      <Timeline position="alternate" sx={{ mt: 0, px: { xs: 2, md: 4 } }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" sx={{ width: 50, height: 50, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <SchoolIcon fontSize="medium" />
            </TimelineDot>
            <TimelineConnector sx={{ height: 100, bgcolor: 'primary.main', width: 4 }} />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper elevation={6} sx={{ p: 4, borderRadius: 8, bgcolor: 'background.paper' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  B.Tech in Computer Science
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Amrita Vishwa Vidyapeetham, Kollam
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontWeight: 500 }}>
                  2022 – Present | CGPA: 6.45
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Excelling in Data Structures, Algorithms, and Cloud Computing, with a focus on practical projects.
                </Typography>
              </Paper>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" sx={{ width: 50, height: 50, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <SchoolIcon fontSize="medium" />
            </TimelineDot>
            <TimelineConnector sx={{ height: 100, bgcolor: 'primary.main', width: 4 }} />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper elevation={6} sx={{ p: 4, borderRadius: 8, bgcolor: 'background.paper' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  Higher Secondary in Computer Science
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  V.G.S.S.A.H.S.S Nediyavila, Kollam
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontWeight: 500 }}>
                  2020 – 2022 | 94.5%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Topped in Computer Science and Mathematics, laying a strong foundation for tech pursuits.
                </Typography>
              </Paper>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" sx={{ width: 50, height: 50, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <StarIcon fontSize="medium" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper elevation={6} sx={{ p: 4, borderRadius: 8, bgcolor: 'background.paper' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  Secondary School
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  J.M.H.S Sasthamcotta, Kollam
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontWeight: 500 }}>
                  2015 – 2020 | 98.2%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Achieved top honors and leadership awards, igniting my passion for technology.
                </Typography>
              </Paper>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default Education;