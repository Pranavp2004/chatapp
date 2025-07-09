import { Box, Typography, Avatar, Grid, Paper, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Phone, LocationOn, School, Work } from '@mui/icons-material';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardHover = {
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    transition: { duration: 0.3 },
  };

  return (
    <Box id="about" sx={{ py: 12, px: { xs: 3, md: 6 }, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{
        position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
        background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, transparent 70%)',
        zIndex: 0, clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 0% 100%)',
      }} />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h2" align="center" sx={{
            mb: 6, fontWeight: 800,
            background: 'linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}>
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <motion.div variants={itemVariants} whileHover={cardHover}>
              <Paper sx={{
                p: 3, borderRadius: 8, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                boxShadow: 8, bgcolor: 'background.default', transition: 'all 0.3s ease',
              }}>
                <Avatar
                  alt="Pranav P"
                  src="/profile.jpg"
                  sx={{ width: 300, height: 300, border: '6px solid', borderColor: 'primary.main', boxShadow: 16 }}
                />
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: 'primary.main' }}>
                  Hello, I’m Pranav P
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.8, mb: 4, color: 'text.primary' }}>
                  I’m a dedicated Computer Science Engineer with a passion for crafting innovative solutions. With expertise in full-stack development (MERN stack), cryptography, and cloud technologies, I thrive on solving complex problems and building scalable applications. My journey includes hands-on projects like secure file transfer systems and leadership roles in tech workshops, shaping my skills and vision.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Paper sx={{ p: 4, borderRadius: 6, mb: 4, bgcolor: 'background.default', boxShadow: 4 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <School sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                        <Box>
                          <Typography variant="body2" color="text.secondary">Education</Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            B.Tech in Computer Science, Amrita Vishwa Vidyapeetham
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Work sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                        <Box>
                          <Typography variant="body2" color="text.secondary">Experience</Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            2+ Years in Development & Leadership
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Email sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                        <Box>
                          <Typography variant="body2" color="text.secondary">Email</Typography>
                          <Typography variant="body1">pranavp2242@gmail.com</Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocationOn sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                        <Box>
                          <Typography variant="body2" color="text.secondary">Location</Typography>
                          <Typography variant="body1">Kerala, India</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 3 }}>
                  <motion.div whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
                    <Button variant="contained" color="primary" sx={{ borderRadius: 8 }}>
                      Download CV
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
                    <Button variant="outlined" color="primary" sx={{ borderRadius: 8 }}>
                      Contact Me
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default About;