// HomePage.js
import React from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  useTheme,
  useMediaQuery,
  Grid2,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const theme = useTheme(); // Get theme from context
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate("/contact");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default", // Use theme colors
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8, flexGrow: 1 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ 
              fontSize: isMobile ? "2.5rem" : "3.5rem",
              color: "text.primary" // Use theme colors
            }}
          >
            Welcome to Novani Therapy
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: "text.secondary" }}>
            Empowering you on your journey to mental wellness and personal growth.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleConsultationClick}
          >
            Schedule a Consultation
          </Button>
        </Box>

        {/* About Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              textAlign: "center",
              color: "text.primary"
            }}
          >
            About Us
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            At Novani Therapy, we believe in providing compassionate, evidence-based care 
            to help you navigate life's challenges.
          </Typography>
        </Box>

        {/* Services Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              textAlign: "center",
              color: "text.primary"
            }}
          >
            Our Services
          </Typography>
          <Grid2 container spacing={4}>
            {["Individual Therapy", "Couples Therapy", "Family Therapy"].map(
              (service) => (
                <Grid2 item xs={12} md={4} key={service}>
                  <Box 
                    sx={{ 
                      textAlign: "center",
                      p: 3,
                      bgcolor: "background.paper", // Use theme colors
                      borderRadius: 1,
                      boxShadow: 1
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom
                      color="text.primary"
                    >
                      {service}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Every couple has a dance when in conflict. One person
                      criticizes and the other person counter-attacks. This
                      dance likely continues until one withdraws or shuts
                      down. Some of the foundational work in couples therapy
                      is recognizing the dance, pausing, listening for the
                      music (emotions and needs) and then co-constructing new
                      moves that allow partners to sync up and move in harmony
                      with one another.
                    </Typography>
                  </Box>
                </Grid2>
              )
            )}
          </Grid2>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: "center" }}>
          <Typography 
            variant="h2" 
            gutterBottom
            color="text.primary"
          >
            Start with a free consultation
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            color="text.secondary"
          >
            Contact Dr. Manglani-Terranova to learn whether her practice is an
            optimal fit for your mental health and wellness needs.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleConsultationClick}
          >
            Contact Us Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;