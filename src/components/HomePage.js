// HomePage.js
import React from "react";
import { Typography, Button, Container, Box, Grid2, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppTheme } from "../theme/hooks";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import CouplesTherapyImage from "../assets/images/pexels-ketut-subiyanto-4308057.jpg";
import individualTherapyImage from "../assets/images/pexels-alex-green-5699431.jpg";
import familyTherapyImage from "../assets/images/pexels-panditwiguna-1128317.jpg";

const HomePage = () => {
  const { theme, isMobile } = useAppTheme();
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate("/contact");
  };
  const services = [
    {
      title: "Individual Therapy",
      icon: PersonOutlineIcon,
      text: "Every individual has a set of stories about who they are. Usually these stories are the most evocative moments of their lives strung together. These narratives can start to dictate what one can and cannot do leading to a limited way of living. In my individual work with patients, I help patients to identify their frequent flyer stories, the behaviors those stories provoke, and skills to use to unhook from these stories and live a life that aligns with their ideal version of themselves.",
      image: individualTherapyImage,
    },
    {
      title: "Couples Therapy",
      icon: PeopleAltOutlinedIcon,
      text: "Every couple has a dance when in conflict. One person criticizes and the other person counter-attacks. This dance likely continues until one withdraws or shuts down. Some of the foundational work in couples therapy is recognizing this dance, pausing, listening for the music (emotions and needs) and then co-constructing new moves that allow partners to sync up and move in harmony with one another. We use an integrative approach that combines research evidence and tools from various modalities to create a tailored treatment program for your unique relationship.",
      image: CouplesTherapyImage,
    },
    {
      title: "Family Therapy",
      icon: FamilyRestroomIcon,
      text: "Families are evolving systems, like seasons with naturally occurring changes. When normative changes are halted or obstructed, one or more people in the family may feel oppressed. In family therapy, I help members to learn ways of relating differently to one another. Changes in the family system can have powerful ripple effects such that identifying individual vulnerabilities and provisioning unmet needs can alter the entire system. I work with families to identify ways to free individuals from oppression and to help families strengthen connections and growth in ways that support health and well-being of individuals with the family and larger systems in which they reside.",
      image: familyTherapyImage,
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
            Welcome to Novani Therapy
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: "text.secondary" }}>
            Empowering you on your journey to mental wellness and personal
            growth.
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

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "text.primary",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: "center",
            }}
          >
            At Novani Therapy & Wellness, we believe in providing compassionate,
            evidence-based care to help you navigate life's challenges.
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "text.primary",
            }}
          >
            Our Services
          </Typography>
          <Grid2 container spacing={4}>
            {services.map((service) => (
              <Grid2 item xs={12} md={4} key={service.title}>
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    pt: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      textAlign: "center",
                      p: 3,
                      pb: 4,
                      bgcolor: "custom.accent1",
                      borderRadius: 1,
                      boxShadow: 1,
                      zIndex: 1,
                      width: "85%",
                      "& > *": {
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Icon
                      component={service.icon}
                      sx={{
                        fontSize: 40,
                        mb: 2,
                        color: "primary.main",
                      }}
                    />
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      color="text.primary"
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        wordWrap: "break-word",
                        pr: 1,
                      }}
                    >
                      {service.text}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "custom.accent1",
                      position: "absolute",
                      right: "2%",
                      top: 0,
                      width: "25%",
                      zIndex: 2,
                      height: "145px",
                      "& img": {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 1,
                        boxShadow: 2,
                      },
                    }}
                  >
                    <img
                      src={service.image}
                      alt={`${service.title} illustration`}
                    />
                  </Box>
                </Box>
              </Grid2>
            ))}
          </Grid2>
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
