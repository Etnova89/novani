import React from "react";
import { Typography, Container, Grid, Box, Paper, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      title: "Individual Therapy",
      description: (
        <>
          Each person carries a set of{" "}
          <strong>personal stories about who they are. </strong>
          Stories are shaped by life experiences. Over time, these stories can
          begin to define what we believe we're capable of, often leading to
          feeling stuck. In one-on-one sessions, I work collaboratively with
          patients to <strong>recognize their life-limiting stories</strong> and
          their typical reactions to them. We then practice skills that enable
          the individual to respond in ways that reflect their values and the
          kind of person they want to be. Together, we create space for{" "}
          <strong>
            {" "}
            self-awareness, flexibility, and an empowered way of living.
          </strong>
        </>
      ),
      details: [
        "Acceptance and Commitment Therapy (ACT)",
        "Narrative Therapy",
        "Solution-Focused Therapy",
      ],
    },
    {
      title: "Couple Therapy",
      description: (
        <>
          Every couple has a familiar “dance” during conflict. Often this is a
          cycle wherein one one partner criticizes, the other defends, and
          eventually one or both withdraw. In couple therapy, one of{" "}
          <strong>the first steps is recognizing this dance,</strong> learning
          to pause, and listening for the emotions and needs that drive the
          conflict. We work to{" "}
          <strong>co-create new patterns of interaction</strong> that address
          both partners' needs. These new patterns are particularly important
          during life transitions--marriage, parenthood, caregiving, retirement,
          illness, and aging. Not only do we focus on healthy conflict
          resolution and adapting to life changes, we also harness
          evidence-based methods to strengthen a culture of fondness and
          admiration. The overall goal is to help re-establish a partnership of{" "}
          <strong> connection, compassion, and gratitude.</strong>
        </>
      ),
      details: [
        "Emotion Focused Therapy (EFT)",
        "Gottman Method",
        "Narrative Therapy",
      ],
      image: "Heena_Chair.jpg",
    },
    {
      title: "Family Therapy",
      description: (
        <>
          <strong>
            Family conflict is rarely just about individual disagreements.
          </strong>{" "}
          Families are dynamic and ever-evolving, much like the seasons. Family
          tension often arises during natural transitions—such as adolescents
          becoming adults, adult children stepping into parenting roles, or
          major life changes like chronic illness or loss. These periods call
          for shifts in roles and expectations, which can sometimes be met with
          resistance or difficulty. When families struggle to adapt, one or more
          members may feel unseen, misunderstood, or even oppressed. In family
          therapy, I help families navigate these challenges by identifying
          patterns across generations, clarifying individual needs, and
          fostering more effective and compassionate ways of relating. Together,
          we explore how shifts in one part of the system can create ripple
          effects throughout the family. This work is about more than resolving
          conflict, it's about
          <strong>
            helping each member feel more seen, connected, and empowered.
          </strong>{" "}
        </>
      ),
      details: [
        "Intergenerational Bowen Therapy",
        "Structural Family Therapy",
        "Systemic Family Therapy",
      ],
    },
    {
      title: "Coaching & Consulting",
      description: (
        <>
          <strong>Coaching:</strong> I offer coaching services for individuals
          seeking personal or professional growth without a mental health
          diagnosis. Coaching focuses on building the client's vision,
          confidence, and actionable strategies to help achieve their goals.
          This can range from{" "}
          <strong>
            improving communication, navigating life transitions, or enhancing
            leadership skills.
          </strong>{" "}
          My approach is culturally sensitive and inclusive, recognizing how
          factors such as culture, race, gender, family dynamics, and life
          experiences shape goals and challenges. Sessions are{" "}
          <strong>
            {" "}
            collaborative, strengths-based, and designed to empower the client{" "}
          </strong>{" "}
          while respecting the diverse contexts that make them who they are.
          <br />
          <br />
          <strong>Consulting:</strong> I offer consulting services for
          organizations and teams seeking to{" "}
          <strong>strengthen well-being, communication, and performance</strong>{" "}
          in their work environments. Through speaking engagements and
          interactive workshops, I provide education and skill-building on
          topics such as stress management, health & wellness, and team
          collaboration. Each session blends{" "}
          <strong>science-backed strategies with practical tools </strong>
          that participants can immediately apply in their personal and
          professional lives. Each engagement is{" "}
          <strong>tailored to the organization’s goals,</strong> whether it's
          for a keynote presentation, leadership training, or an immersive
          workshop experience
        </>
      ),
      details: [
        "Building Resilience in Times of Change",
        "Stress Management Strategies for High-Performing Teams",
        "Effective Communication for Stronger Relationships",
        "Emotional Intelligence in Leadership",
        "Preventing Burnout and Fostering Well-being",
        "Navigating Life Transitions with Confidence",
        "Mind-Body Approaches to Mental Health",
      ],
    },
  ];

  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate("/contact");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
        animation: "fadeIn 1.5s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
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
                  Approaches & Topics:
                </Typography>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx}>
                      <Typography variant="body1">{detail}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
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
