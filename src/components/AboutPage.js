import React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  School,
  Psychology,
  Science,
  HealthAndSafety,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAppTheme } from "../theme/hooks";
import HeenaHeadshot from "../assets/images/Heena_headshot_fall2023.jpg";

const AboutPage = () => {
  const { theme, isMobile } = useAppTheme();
  const navigate = useNavigate();
  const handleConsultationClick = () => {
    navigate("/contact");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h1" gutterBottom sx={{ textAlign: "center", mb: 6 }}>
        About Dr. Heena Manglani-Terranova
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={HeenaHeadshot}
              alt="Dr. Heena Manglani-Terranova"
              sx={{
                width: "100%",
                border: `1px solid ${theme.palette.primary.main}`,
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph>
              Dr. <strong>Heena Manglani-Terranova</strong> is a <b>Harvard-trained</b> licensed clinical psychologist with a passion for helping patients live a life based on their own personally-chosen values. She believes that life will always be full of stressors that will create distress (i.e., anxiety, depression, worry). That is not the problem. The issue is what we, as humans tend to do when experiencing distress that matters. She uses a behavioral approach to help patients live a life that aligns with what matters most to them. Dr. Manglani-Terranova also specializes in working with South Asian Americans and bicultural couples given her understanding of the unique challenges faced by the South
              Asian community. Dr. Manglani-Terranova uses a culturally sensitive and curious approach to understand the barriers to living a meaningful life, and provides culturally-attuned care that leverages narratives of strength and resilience in her patients and provides directions forv values-based living.
            </Typography>
            <Typography variant="body1">
              In addition to her clinical work, Dr. Manglani-Terranova is a
              research scientist, studying ways to improve health and well-being
              in South Asian Americans and individuals adjusting to chronic
              illness (i.e. multiple sclerosis). Her unique focus on relational
              factors positions her to study individuals within the larger
              systems in which they function and to leveral a social justice
              lens to bridge the gap between mental health and chronic disease
              and holistic care.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Specializations
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Psychology color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Research on mental health needs of South Asian Americans aka Desis"
              secondary="Studying factors that contribute to vulnerabilities and resilience in South Asian Americans to inform the tailoring of culturally-attuned interventions"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Science color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Multiple Sclerosis Research"
              secondary="Investigating the early impact of MS diagnosis on patients and loved ones and developing interventions to facilitate living well with MS"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HealthAndSafety color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Chronic Illness Management"
              secondary="Helping patients navigate the emotional challenges of living with chronic health conditions"
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Education and Credentials
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <School color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Pre-doctoral Internship & Postdoctoral Fellowship - Massachusetts General Hospital/Harvard Medical School/Ph.D. in Clinical Psychology - The Ohio State University/BA in Psychology - Rutgers University"
              secondary="Specialization in Health Psychology"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <School color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Licensed Clinical Psychologist - Massachusetts, Florida, (California)"
              secondary="Massachusetts State Board of Psychology"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <School color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Instructor in Psychology - Massachusetts General Hospital"
              secondary=""
            />
          </ListItem>
        </List>
      </Paper>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Ready to start your journey with Dr. Manglani-Terranova to uncover
          your resilience?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
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

export default AboutPage;
