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
          <strong>personal stories about who they are.</strong> Usually these
          stories are shaped by powerful moments and past experiences. Over
          time, these stories can begin to define what we believe we're capable
          of, often leading to patterns that feel limiting or stuck. In
          individual therapy, I work collaboratively with clients to{" "}
          <strong>identify these recurring “frequent flyer” stories,</strong>{" "}
          understand how they react to them, and{" "}
          <strong>
            develop skills to respond in ways that reflect their values
          </strong>{" "}
          and what kind of person they strive to be. Together, we create space
          for{" "}
          <strong>
            greater self-awareness, flexibility, and a more empowered way of
            living.
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
          Every couple has a familiar “dance” during conflict—often a cycle
          where one partner criticizes, the other defends or counter-attacks,
          and eventually someone withdraws or shuts down. In couple therapy, one
          of <strong>the first steps is recognizing this dance,</strong>{" "}
          learning to pause, and listening for the music underneath—the
          emotions, needs, and longings that drive it. Together, we work to{" "}
          <strong>co-create new patterns of interaction</strong> that help you
          move more intentionally and in sync with one another. These new
          patterns are particularly important as couples go through life
          transitions--making a long-term commitment to each other, parenthood,
          midlife demands of parenting and caregiving, becoming grandparents,
          retirement, and aging. Sessions focus on deepening understanding,
          improving communication, and strengthening both partners’ ability to
          navigate conflict together. At the core of the work is a commitment to
          building a partnership rooted in{" "}
          <strong>gratitude, compassion, and connection.</strong>
        </>
      ),
      details: [
        "Emotion Focused Therapy (EFT)",
        "Gottman Method",
        "Narrative Therapy",
      ],
    },
    {
      title: "Family Therapy",
      description: (
        <>
          <strong>
            Family conflict is rarely just about individual disagreements
          </strong>
          —it is rooted in the broader systems and intergenerational patterns
          that shape each family member's experience. Families are dynamic and
          ever-evolving, much like the seasons. Family tension often arises
          during natural transitions—such as adolescents becoming adults, adult
          children stepping into parenting roles, or major life changes like
          chronic illness or loss affecting the family system. These periods
          call for shifts in roles and expectations, which can sometimes be met
          with resistance or difficulty. When families struggle to adapt, one or
          more members may feel unseen, misunderstood, or even oppressed. In
          family therapy, I help families navigate these challenges by
          identifying patterns across generations, clarifying individual needs,
          and fostering more effective and compassionate ways of relating.
          Together, we explore how shifts in one part of the system can create
          ripple effects throughout the family. This work is about more than
          resolving conflict, it's about{" "}
          <strong>
            helping each member feel more connected, understood, and empowered.
          </strong>{" "}
          My approach supports the well-being of both individuals and the family
          unit as a whole, while acknowledging the larger social, cultural, and
          relational systems in which they live.
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
          diagnosis. Coaching focuses on building your vision, confidence, and
          actionable strategies to help you achieve your goals—whether that’s{" "}
          <strong>
            improving communication, navigating life transitions, or enhancing
            leadership skills.
          </strong>{" "}
          Unlike therapy, coaching is future-oriented and goal-driven, helping
          you move from where you are to where you want to be.{" "}
          <strong>My approach is culturally sensitive and inclusive,</strong>{" "}
          recognizing how factors such as culture, race, gender, family
          dynamics, and life experiences shape your goals and challenges.
          Sessions are collaborative, strengths-based, and designed to empower
          you while respecting the diverse contexts that make you who you are.{" "}
          <br />
          <br />
          <strong>Consulting:</strong> I also offer consulting services for
          organizations and teams seeking to{" "}
          <strong>
            strengthen well-being, communication, and performance in their work
            environments.
          </strong>{" "}
          I also offer speaking engagements and interactive workshops on topics
          such as stress management, health & wellness, and team collaboration.
          Each session blends{" "}
          <strong>science-backed strategies with practical tools</strong>
          that participants can immediately apply in their personal and
          professional lives. Each engagement is{" "}
          <strong>tailored to your organization’s goals,</strong> whether you’re
          looking for a keynote presentation, a leadership training, or an
          immersive workshop experience
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
                  Modalities, Approaches, & Topics:
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
