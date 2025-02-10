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
      text: "Each person carries to therapy a set of stories about who they are (or aren’t), why they are stuck, and where they want to head. Often, there is a large focus on all the problems. My approach to therapy is to help discover your strengths, help you unhook from self-sabotaging stories, and to discover what gives you meaning and purpose—and to then support your steps toward living the life you imagined.",
      image: individualTherapyImage,
    },
    {
      title: "Couples Therapy",
      icon: PeopleAltOutlinedIcon,
      text: "Every couple has a dance when in conflict. One person criticizes and the other person counter-attacks. This dance likely continues until one withdraws or shuts down. Some of the foundational work in couples therapy is recognizing the dance, pausing, listening for the music (emotions and needs) and then co-constructing new moves that allow partners to sync up and move in harmony with one another.",
      image: CouplesTherapyImage,
    },
    {
      title: "Family Therapy",
      icon: FamilyRestroomIcon,
      text: "Families who come to therapy often believe that the problem lies in one person. If she was different, our whole family could be better. That might be true. However, people are part of interconnected systems. Family members act in response to one another and to the broader contexts in which they live. My goal through family therapy is to help individuals make changes that create ripple effects changing the dynamic, understanding, and compassion within relationships. I strive to help families go from seeing a person as the problem to seeing the problem as the problem. With that distance, a team-based mindset can allow changes for the betterment of all members.",
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
            At Novani Therapy, we believe in providing compassionate,
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
