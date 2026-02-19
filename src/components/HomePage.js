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
            Meet Dr. Heena Manglani-Terranova
          </Typography>{" "}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: "1.5rem" }}
          >
            I’m a Harvard-trained clinical psychologist offering therapy for
            individuals, couples, and families in California, Massachusetts, and
            Florida.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: "1.5rem" }}
          >
            My approach blends compassion with practical tools, helping you
            better understand yourself, strengthen your relationships, and
            navigate life’s stressors with resilience. I draw from
            evidence-based methods including Acceptance and Commitment Therapy
            (ACT), Emotion Focused Therapy (EFT), and Narrative Therapy—but
            always tailor care to fit you.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: "1.5rem" }}
          >
            At the core of my work is creating a safe, supportive space where
            you can explore, grow, and move toward the life and connections you
            want.
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
        animation: "fadeIn 1s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
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
          <Grid2 container spacing={2} alignItems="center">
            {/* Text Section */}
            <Grid2
              item
              xs={12}
              sm={6}
              order={{ xs: 2, sm: 1 }} // On mobile, text appears below the image
              sx={{
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
            </Grid2>

            {/* Image Section */}
            <Grid2
              item
              xs={12}
              sm={6}
              order={{ xs: 1, sm: 2 }} // On mobile, image appears above the text
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <img
                src={heenaChairImage}
                alt="Dr. Heena Manglani-Terranova"
                style={{
                  width: "100%",
                  height: "100%", // Matches the height of the parent container
                  objectFit: "cover", // Ensures the image scales properly
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              />
            </Grid2>
          </Grid2>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleAboutClick}
            sx={{
              fontSize: "1.2rem", // Increase the font size
              padding: "10px 20px", // Optional: Adjust padding for better appearance
            }}
          >
            Learn more about Dr. Heena
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
