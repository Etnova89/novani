import React from "react";
import { Typography, Button, Container, Box, Grid2, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppTheme } from "../theme/hooks";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import heenaChairImage from "../assets/images/Heena_Chair.jpg";

const HomePage = () => {
  const { theme, isMobile } = useAppTheme();
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate("/contact");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const services = [
    {
      title: "Individual Therapy",
      icon: PersonOutlineIcon,
      text: (
        <>
          <Typography variant="h4" component="span" fontWeight="bold">
            Dr. Heena Manglani-Terranova
          </Typography>{" "}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: "1.5rem" }}
          >
            is a Harvard trained, licensed clinical psychologist offering
            compassionate therapy to individuals and couples in{" "}
            <Typography component="span" fontWeight="bold">
              California, Massachusetts, and Florida.
            </Typography>{" "}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: "1.5rem" }}
          >
            Through exploring emotions and learning practical skills for
            managing them, she is committed to helping patients build
            self-awareness, strengthen relationships, and cope with life
            stressors.{" "}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: "1.5rem" }}
          >
            She integrates evidence-based modalities, including Acceptance and
            Commitment Therapy (ACT), Emotionally Focused Therapy (EFT), and
            Narrative Therapy. Dr. Manglani-Terranova combines exercises and
            tools to provide{" "}
            <Typography component="span" fontWeight="bold">
              thoughtful, personalized care.
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: "1.5rem" }}
          >
            She strives to create a safe, supportive space where clients can
            explore themselves, their relationships, and their life challenges
            with courage and clarity. Guided by her core values of curiosity and
            cultural sensitivity, Dr. Manglani-Terranova helps clients connect
            more deeply with themselves—because knowing oneself is often where
            meaningful change begins.
          </Typography>
        </>
      ),
      image: heenaChairImage,
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8, flexGrow: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontSize: isMobile ? "2.5rem" : "3.5rem",
              color: "text.primary",
            }}
          >
            Welcome to Novani Therapy & Wellness
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: "text.secondary" }}>
            Empowering you on your journey to mental wellness and personal
            growth.
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Box sx={{ position: "relative", display: "flex", gap: 2, mb: 4 }}>
            <Box
              sx={{
                flex: "2",
                bgcolor: "custom.accent1",
                borderRadius: 1,
                boxShadow: 1,
                p: 3,
                zIndex: 1,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  wordWrap: "break-word",
                }}
              >
                {services[0].text}
              </Typography>
            </Box>

            <Box
              sx={{
                flex: "1",
                position: "relative",
                marginLeft: "-2rem",
                zIndex: 2,
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <img
                src={heenaChairImage}
                alt="Dr. Heena Manglani-Terranova"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" gutterBottom color="text.primary">
            Start with a free consultation
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Contact Dr. Manglani-Terranova to learn whether her practice is an
            ideal fit for your mental health and wellness needs.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleAboutClick}
          >
            Learn more about Dr. Manglani-Terranova
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
