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
import { useAppTheme } from '../theme/hooks';

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
              src="/images/heena-manglani-terranova.jpg"
              alt="Dr. Heena Manglani-Terranova"
              sx={{
                width: "100%",
                borderRadius: "50%",
                border: `4px solid ${theme.palette.primary.main}`,
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              Dr. Heena Manglani-Terranova is a licensed clinical psychologist specializing
              in South Asian and Desi therapy. With a deep understanding of
              cultural nuances and the unique challenges faced by the South
              Asian community, Dr. Manglani-Terranova provides culturally
              competent care that resonates with her clients' experiences and
              backgrounds.
            </Typography>
            <Typography variant="body1">
              In addition to her clinical work, Dr. Manglani-Terranova is a
              dedicated researcher, focusing on Multiple Sclerosis and other
              chronic illnesses. Her research aims to bridge the gap between
              mental health and chronic disease management, providing holistic
              care for individuals navigating these complex health journeys.
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
              primary="South Asian and Desi Therapy"
              secondary="Culturally sensitive counseling for individuals of South Asian descent"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Science color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Multiple Sclerosis Research"
              secondary="Investigating the psychological impacts of MS and developing coping strategies"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HealthAndSafety color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Chronic Illness Management"
              secondary="Helping clients navigate the emotional challenges of living with chronic conditions"
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
              primary="Ph.D. in Clinical Psychology"
              secondary="Specialization in Cultural Psychology and Health Psychology"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <School color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Licensed Clinical Psychologist"
              secondary="State Board of Psychology"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <School color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary="Certified in Culturally Responsive Therapy"
              secondary="American Psychological Association"
            />
          </ListItem>
        </List>
      </Paper>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Ready to start your healing journey with Dr. Manglani-Terranova?
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
