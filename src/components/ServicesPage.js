import React from "react";
import { Typography, Container, Grid, Box, Paper, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      title: "Individual Therapy",
      description:
        "Each person carries a set of <b>personal stories about who they are.</b> Usually these stories are shaped by powerful moments and past experiences. Over time, these stories can begin to define what we believe we're capable of, often leading to patterns that feel limiting or stuck. In individual therapy, I <b>work collaboratively with clients to identify these recurring “frequent flyer” stories,<b> understand how they react to them, and <b>develop skills to respond in ways that reflect their values</b> and what kind of person they strive to be. Together, we create space for <b>greater flexibility, self-awareness, and a more empowered way of living.</b>",
      details: [
        "Acceptance and Commitment Therapy (ACT)",
        "Narrative Therapy",
        "Solution-Focused Therapy",
      ],
    },
    {
      title: "Couple Therapy",
      description:
        "Every couple has a familiar “dance” during conflict—often a cycle where one partner criticizes, the other defends or counter-attacks, and eventually someone withdraws or shuts down. In couple therapy, one of the first steps is recognizing this dance, learning to pause, and listening for the music underneath—the emotions, needs, and longings that drive it./Together, we work to co-create new patterns of interaction that help you move more intentionally and in sync with one another./ Relational challenges often emerge during life transitions--making a long-term commitment to a partner, parenthood, midlife demands of parenting, caregiving, becoming grandparents, retirement, and aging. Sessions focus on deepening understanding, improving communication, and strengthening your ability to navigate conflict. At the core of the work is a commitment to building a partnership rooted in gratitude, compassion, and curiosity.",
      details: [
        "Emotion Focused Therapy (EFT)",
        "Gottman Method",
        "Structural Therapy",
      ],
    },
    {
      title: "Family Therapy",
      description:
        "Navigate familial differences by recognizing intergenerational patterns, clarifying individual needs, and strengthening relational bonds.Families are evolving systems, like seasons with naturally occurring changes. When normative changes are halted or obstructed, one or more people in the family may feel oppressed. In family therapy, I help members to learn ways of relating differently to one another. Changes in the family system can have powerful ripple effects such that identifying individual vulnerabilities and provisioning unmet needs can alter the entire system. I work with families to identify ways to free individuals from oppression and to help families strengthen connections and growth in ways that support health and well-being of individuals with the family and larger systems in which they reside.",
      details: [
        "Structural Family Therapy",
        "Intergenerational Bowen Therapy",
        "Systemic Therapy",
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
