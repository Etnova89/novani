import React from "react";
import { Typography, Container, Grid, Box, Paper, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one sessions tailored to your unique goals. I use a skills-based approach to help build awareness of challenging experiences and help patients use evidence-based tools to pursue what matters to them.",
      details: [
        "Cognitive Behavioral Therapy (CBT)",
        "Mindfulness-Based Treatments",
        "Solution-Focused Therapy",
      ],
    },
    {
      title: "Couple Therapy",
      description:
        "Strengthen your understanding, communication, and problem-solving through structured sessions focused on resolving disagreements and enhancing closeness. The work centers on fostering partnerships that are rooted in gratitude, compassion, and curiosity.",
      details: [
        "Gottman Method",
        "Emotion Focused Couple Therapy (EFCT)",
        "Narrative Therapy",
      ],
    },
    {
      title: "Family Therapy",
      description:
        "Navigate familial differences by recognizing intergenerational patterns, clarifying individual needs, and strengthening relational bonds.",
      details: [
        "Structural Family Therapy",
        "Intergenerational Bowen Therapy",
        "Solution-Focused Brief Therapy (SFBT)",
      ],
    },
    {
      title: "Consultation and Program Development",
      description:
        "Dr. Manglani-Terranova provides clinical consultation services to mental health providers who are working with the Asian American Community. She also offers services for program development for various healthcare, business, and organizational needs.",
      details: [
        "Clinical Consultation",
        "Program Development",
        "Interactive Workshops",
      ],
    },
  ];

  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate("/contact");
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h1" gutterBottom sx={{ textAlign: "center", mb: 6 }}>
        Our Services
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                color="primary"
              >
                {service.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {service.description}
              </Typography>
              <Box sx={{ mt: 2, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  What we offer:
                </Typography>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{detail}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<ArrowForward />}
                sx={{ mt: "auto", alignSelf: "flex-start" }}
                onClick={handleConsultationClick}
              >
                Learn More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Ready to start your journey?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
          onClick={handleConsultationClick}
        >
          Schedule a Consultation
        </Button>
      </Box>
    </Container>
  );
};

export default ServicesPage;
