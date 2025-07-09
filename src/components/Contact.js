import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Paper, Link, Divider, IconButton, useTheme, Snackbar, Alert } from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationOnIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon, WhatsApp as WhatsAppIcon, Send as SendIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const validateForm = () => {
    let errors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) { errors.name = 'Name is required'; isValid = false; }
    if (!formData.email.trim()) { errors.email = 'Email is required'; isValid = false; }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) { errors.email = 'Invalid email address'; isValid = false; }
    if (!formData.message.trim()) { errors.message = 'Message is required'; isValid = false; }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      setSnackbarOpen(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 3000);
    }
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const hoverEffect = {
    scale: 1.03,
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    transition: { duration: 0.3 },
  };

  return (
    <Box id="contact" sx={{ py: 12, px: { xs: 3, md: 6 }, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position: 'absolute', top: -100, left: -100, width: 300, height: 300, borderRadius: '50%', bgcolor: theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.light', opacity: 0.1, zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: theme.palette.mode === 'dark' ? 'secondary.dark' : 'secondary.light', opacity: 0.1, zIndex: 0 }} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h2" align="center" gutterBottom sx={{
            mb: 6, fontWeight: 800,
            background: theme.palette.mode === 'dark' ? 'linear-gradient(90deg, #3b82f6, #60a5fa)' : 'linear-gradient(90deg, #1e40af, #3b82f6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}>
            Let’s Connect
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Paper elevation={8} sx={{
            p: { xs: 3, md: 6 }, borderRadius: 8,
            background: theme.palette.mode === 'dark' ? 'linear-gradient(145deg, #2d3748, #1e293b)' : 'linear-gradient(145deg, #ffffff, #f3f4f6)',
            boxShadow: theme.shadows[12], overflow: 'hidden',
          }}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <motion.div whileHover={hoverEffect}>
                  <Box>
                    <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
                      Contact Details
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: 60, height: 60, bgcolor: 'primary.main', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 3 }}>
                          <EmailIcon fontSize="large" />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Email</Typography>
                          <Typography variant="body1" color="text.secondary" component="a" href="mailto:pranavp2242@gmail.com" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main', textDecoration: 'underline' } }}>
                            pranavp2242@gmail.com
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: 60, height: 60, bgcolor: 'primary.main', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 3 }}>
                          <PhoneIcon fontSize="large" />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Phone</Typography>
                          <Typography variant="body1" color="text.secondary" component="a" href="tel:+916238082898" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main', textDecoration: 'underline' } }}>
                            +91 6238082898
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: 60, height: 60, bgcolor: 'primary.main', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 3 }}>
                          <LocationOnIcon fontSize="large" />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Location</Typography>
                          <Typography variant="body1" color="text.secondary">
                            Kerala, India
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    
                    <Box sx={{ mt: 4 }}>
                      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>Connect with Me</Typography>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton component="a" href="https://www.linkedin.com/in/pranav-p-2242" target="_blank" rel="noopener" sx={{ bgcolor: '#0077b5', color: 'white', '&:hover': { bgcolor: '#006097', transform: 'translateY(-4px)' }, transition: 'all 0.3s ease' }}>
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton component="a" href="https://github.com/pranavp2242" target="_blank" rel="noopener" sx={{ bgcolor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5', color: theme.palette.mode === 'dark' ? 'white' : 'black', '&:hover': { bgcolor: theme.palette.mode === 'dark' ? '#444' : '#e0e0e0', transform: 'translateY(-4px)' }, transition: 'all 0.3s ease' }}>
                          <GitHubIcon />
                        </IconButton>
                        <IconButton component="a" href="https://wa.me/916238082898" target="_blank" rel="noopener" sx={{ bgcolor: '#25D366', color: 'white', '&:hover': { bgcolor: '#128C7E', transform: 'translateY(-4px)' }, transition: 'all 0.3s ease' }}>
                          <WhatsAppIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div whileHover={hoverEffect}>
                  <Box>
                    <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
                      Send a Message
                    </Typography>
                    
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      <TextField
                        label="Your Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!formErrors.name}
                        helperText={formErrors.name}
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 8, '& fieldset': { borderColor: theme.palette.divider }, '&:hover fieldset': { borderColor: theme.palette.primary.main } } }}
                        fullWidth
                        required
                      />
                      
                      <TextField
                        label="Your Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 8, '& fieldset': { borderColor: theme.palette.divider }, '&:hover fieldset': { borderColor: theme.palette.primary.main } } }}
                        fullWidth
                        required
                      />
                      
                      <TextField
                        label="Your Message"
                        variant="outlined"
                        multiline
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={!!formErrors.message}
                        helperText={formErrors.message}
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 8, '& fieldset': { borderColor: theme.palette.divider }, '&:hover fieldset': { borderColor: theme.palette.primary.main } } }}
                        fullWidth
                        required
                      />
                      
                      <Box sx={{ textAlign: 'right' }}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            endIcon={<SendIcon />}
                            sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: 8, textTransform: 'none', fontWeight: 600, boxShadow: theme.shadows[6], '&:hover': { boxShadow: theme.shadows[10] } }}
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </Box>
                    </form>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </motion.div>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity="success" icon={<CheckCircleIcon fontSize="inherit" />} sx={{ bgcolor: 'success.main', color: 'white', borderRadius: 8, boxShadow: theme.shadows[8] }}>
          Your message has been sent successfully! I’ll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;